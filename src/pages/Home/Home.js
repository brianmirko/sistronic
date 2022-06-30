import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import Appbar from "../../components/appbar";
import theme from "../../styles/theme";
import Banner from "../../components/banner";
import Promotions from "../../components/promotions";
import Products from "../../components/products";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Banner />
      <Promotions />
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          p: 4,
        }}
      >
        <Typography variant="h4">Descripcion de los Productos</Typography>
      </Box>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Products />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
