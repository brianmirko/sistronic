import React, { useState, useEffect } from "react";
import { Container, Grid, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
// import { products } from "../../data/index";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";

import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/products");
    console.log(data[0]);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderProducts = products.map((product) => {
    return (
      <Grid
        item
        key={product.id_producto}
        xs={2}
        sm={4}
        md={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {matches ? (
          <SingleProduct product={product} matches={matches} />
        ) : (
          <SingleProductDesktop product={product} matches={matches} />
        )}
      </Grid>
    );
  });
  //----------------------------------------------------------

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{
          margin: "20px 4px 10px 4px",
        }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
};

export default Products;
