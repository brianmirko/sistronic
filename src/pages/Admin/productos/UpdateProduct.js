import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Paper } from "@mui/material";

const initialForm = {
  nombre_producto: "",
  marca: "",
  costo: "",
  precio: "",
  stock: "",
  descripcion: "",
};

const UpdateProduct = ({ updateProduct, dataToEdit, setDataToEdit }) => {
  const [newProduct, setNewProduct] = useState(initialForm);

  useEffect(() => {
    setNewProduct(dataToEdit);
  }, [dataToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProduct(newProduct);
    handleReset();
  };

  const handleReset = () => {
    setNewProduct(initialForm);
    setDataToEdit(initialForm);
  };

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Box component={Paper} p={4} mx={10}>
        <form onSubmit={handleSubmit}>
          <Box display="block">
            <TextField
              sx={{ p: 1, mx: 5 }}
              label="Nombre del producto"
              variant="standard"
              id="nombre_producto"
              type="text"
              name="nombre_producto"
              onChange={handleChange}
              required
              value={newProduct.nombre_producto}
            />
            <TextField
              sx={{ p: 1 }}
              label="Marca"
              variant="standard"
              id="marca"
              type="text"
              name="marca"
              onChange={handleChange}
              required
              value={newProduct.marca}
            />
          </Box>
          <Box display="block">
            <TextField
              sx={{ p: 1, mx: 5 }}
              label="Costo"
              variant="standard"
              id="costo"
              type="number"
              name="costo"
              onChange={handleChange}
              required
              value={newProduct.costo}
            />
            <TextField
              sx={{ p: 1 }}
              label="Precio"
              variant="standard"
              id="precio"
              type="number"
              name="precio"
              onChange={handleChange}
              required
              value={newProduct.precio}
            />
          </Box>
          <Box display="block">
            <TextField
              sx={{ p: 1, mx: 5 }}
              label="Stock"
              variant="standard"
              id="stock"
              type="number"
              name="stock"
              onChange={handleChange}
              required
              value={newProduct.stock}
            />
            <TextField
              sx={{ p: 1 }}
              label="Descripcion"
              variant="standard"
              id="descripcion"
              type="text"
              name="descripcion"
              onChange={handleChange}
              required
              value={newProduct.descripcion}
            />
          </Box>
          <Button type="submit" variant="contained" sx={{ margin: "20px" }}>
            EDITAR
          </Button>
          <Button
            type="button"
            variant="contained"
            sx={{ margin: "20px" }}
            onClick={handleReset}
          >
            LIMPIAR
          </Button>
        </form>
      </Box>
    </>
  );
};

export default UpdateProduct;
