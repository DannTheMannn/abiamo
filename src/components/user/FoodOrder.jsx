import { useEffect, useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import CartComponent from "./Cart";
import { Container } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import FoodBannerComponent from "./FoodBanner";
import { ShoppingCartContext } from "../hooks/ShoppingCartContext";
import OrderItemComponent from "./OrderItem";
import { DataProvider } from "../hooks/ApiContext";
import { Margin } from "@mui/icons-material";

function FoodOrderComponent() {
  const { openCart, cartQuantity } = useContext(ShoppingCartContext);
  const [items, setItems] = useState([]);


  useEffect(() => {
    document.title = 'Bruzzelhütte';
    async function fetchData() {
      const response = await axios.get("http://aid.ddns.net:8080/loadMenu");
      setItems(response.data);
    }
    fetchData();
  }, []);

  if (items.length === 0) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>

          <Box component="img" sx={{height: "50px", marginRight: "10px"}}
           alt="icon missing"
           src="brzl1.png"
          />

            <Typography variant="h6" noWrap component="div">
              Bruzzelhütte
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={openCart}
              >
                <Badge badgeContent={cartQuantity} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{marginTop: "10vh"}}>
        <FoodBannerComponent />
        {items.map((item) => (
          <OrderItemComponent
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            price={item.price}
          />
        ))}
      </Container>
      <DataProvider>
      <CartComponent />
      </DataProvider>

    </>
  );
}

export default FoodOrderComponent;