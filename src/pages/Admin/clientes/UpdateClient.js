import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Paper } from "@mui/material";

const initialForm = {
  id_usuario: "",
  nombres: "",
  apellidos: "",
  telefono: "",
  direccion: "",
  password: "",
  rol: "",
};

const UpdateClient = ({ updateUser, dataToEdit, setDataToEdit }) => {
  const [newUser, setNewUser] = useState(initialForm);

  useEffect(() => {
    setNewUser(dataToEdit);
  }, [dataToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateUser(newUser);
    handleReset();
  };

  const handleReset = () => {
    setNewUser(initialForm);
    setDataToEdit(initialForm);
  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
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

export default UpdateClient;
