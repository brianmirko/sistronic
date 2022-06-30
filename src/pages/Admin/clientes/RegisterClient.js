import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Box,
  Button,
  TextField,
  Input,
  Paper,
} from "@mui/material";

const initialForm = {
  id_usuario: "",
  nombres: "",
  apellidos: "",
  telefono: "",
  direccion: "",
  password: "",
  rol: "",
};

const RegisterClient = () => {
  const [newUser, setNewUser] = useState(initialForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/user/register", newUser)
      .then((response) => {
        console.log(response);
        window.alert("Usuario registrado exitosamente");
      })
      .catch(({ response }) => {
        console.log(response.data);
        window.alert(response.data.message);
      });

    setNewUser(initialForm);
  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Box pb={4}>
        <Typography variant="h5" component="h5">
          Registrar Usuarios
        </Typography>
      </Box>
      <Box component={Paper} p={4} mx={10}>
        <form onSubmit={handleSubmit}>
          <Box display="block">
            <TextField
              sx={{ p: 1, mx: 5 }}
              label="Cedula de Identidad"
              variant="standard"
              id="id_usuario"
              type="number"
              name="id_usuario"
              onChange={handleChange}
              required
              value={newUser.id_usuario}
            />
            <TextField
              sx={{ p: 1 }}
              label="Nombres"
              variant="standard"
              id="nombres"
              type="text"
              name="nombres"
              onChange={handleChange}
              required
              value={newUser.nombres}
            />
          </Box>
          <Box display="block">
            <TextField
              sx={{ p: 1, mx: 5 }}
              label="Apellidos"
              variant="standard"
              id="apellidos"
              type="text"
              name="apellidos"
              onChange={handleChange}
              required
              value={newUser.apellidos}
            />
            <TextField
              sx={{ p: 1 }}
              label="Telefono"
              variant="standard"
              id="telefono"
              type="number"
              name="telefono"
              onChange={handleChange}
              required
              value={newUser.telefono}
            />
          </Box>
          <Box display="block">
            <TextField
              sx={{ p: 1, mx: 5 }}
              label="Direccion"
              variant="standard"
              id="direccion"
              type="text"
              name="direccion"
              onChange={handleChange}
              required
              value={newUser.direccion}
            />
            <TextField
              sx={{ p: 1 }}
              label="Password"
              variant="standard"
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              required
              value={newUser.password}
            />
          </Box>
          <Box display="block">
            <TextField
              sx={{ p: 1, mx: 5 }}
              label="Cargo"
              variant="standard"
              id="rol"
              type="text"
              name="rol"
              onChange={handleChange}
              required
              value={newUser.rol}
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

export default RegisterClient;
