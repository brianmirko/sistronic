import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Appbar from "../../components/appbar";
import Footer from "../../components/footer";
import Products from "../../components/products";

const ProductsPage = () => {
  return (
    <div>
      <Appbar />
      <Container maxWidth="xl" sx={{ background: "#fff", paddingTop: "20px" }}>
        <Box
          display="flex"
          // justifyContent="center"
          sx={{
            p: 4,
          }}
        >
          <Typography variant="h4">Descripcion de los Productos</Typography>
        </Box>
        <Products />
      </Container>
      <Footer />
    </div>
  );
};

export default ProductsPage;
