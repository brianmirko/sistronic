import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Box, Button, TextField, Paper } from "@mui/material";

const RegisterProduct = () => {
  const [nombre_producto, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [costo, setCosto] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre_producto", nombre_producto);
    formData.append("marca", marca);
    formData.append("costo", costo);
    formData.append("precio", precio);
    formData.append("stock", stock);
    formData.append("descripcion", descripcion);
    formData.append("imagen", imagen);

    await axios
      .post("http://localhost:5000/api/products", formData)
      .then((response) => {
        console.log(response.data);
        window.alert(response.data);
      })
      .catch((err) => console.log(err));

    setNombre("");
    setMarca("");
    setCosto("");
    setPrecio("");
    setStock("");
    setDescripcion("");
    document.getElementById("imagen").value = null;
  };

  return (
    <>
      <Box pb={4}>
        <Typography variant="h5" component="h5">
          Registrar Producto
        </Typography>
      </Box>
      <Box component={Paper} p={4} mx={10}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Box display="block">
            <TextField
              sx={{ p: 1, mx: 5 }}
              label="Nombre del producto"
              variant="standard"
              id="nombre_producto"
              type="text"
              name="nombre_producto"
              onChange={(e) => setNombre(e.target.value)}
              required
              value={nombre_producto}
            />
            <TextField
              sx={{ p: 1 }}
              label="Marca"
              variant="standard"
              id="marca"
              type="text"
              name="marca"
              onChange={(e) => setMarca(e.target.value)}
              required
              value={marca}
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
              onChange={(e) => setCosto(e.target.value)}
              required
              value={costo}
            />
            <TextField
              sx={{ p: 1 }}
              label="Precio"
              variant="standard"
              id="precio"
              type="number"
              name="precio"
              onChange={(e) => setPrecio(e.target.value)}
              required
              value={precio}
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
              onChange={(e) => setStock(e.target.value)}
              required
              value={stock}
            />
            <TextField
              sx={{ p: 1 }}
              label="Descripcion"
              variant="standard"
              id="descripcion"
              type="text"
              name="descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
              required
              value={descripcion}
            />
          </Box>
          <Box display="block">
            <TextField
              sx={{ py: 2, mx: 5 }}
              variant="standard"
              id="imagen"
              type="file"
              name="imagen"
              onChange={(e) => setImagen(e.target.files[0])}
              required
            />
          </Box>
          <Button type="submit" variant="contained" sx={{ margin: "20px" }}>
            REGISTRAR
          </Button>
        </form>
      </Box>
    </>
  );
};

export default RegisterProduct;
