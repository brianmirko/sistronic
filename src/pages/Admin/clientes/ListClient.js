import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import TableClients from "./TableClients";
import UpdateClient from "./UpdateClient";

const ListClient = () => {
  const [users, setUsers] = useState([]);
  const [listUpdate, setListUpdate] = useState(false);

  const getUsers = async () => {
    const { data } = await axios.get("http://localhost:5000/api/user");
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
    setListUpdate(false);
  }, [listUpdate]);

  //---------------------------------
  const [dataToEdit, setDataToEdit] = useState({
    id_usuario: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    direccion: "",
    password: "",
    rol: "",
  });

  const updateUser = async (data) => {
    await axios.put(`http://localhost:5000/api/user/${data.id_usuario}`, data);
    setListUpdate(true);
  };

  const deleteUser = async (id) => {
    let isDelete = window.confirm(
      `Esta seguro de eliminar el registro con el id: ${id}?`
    );
    if (isDelete) {
      await axios.delete(`http://localhost:5000/api/user/${id}`);
      setListUpdate(true);
    } else {
      return;
    }
  };
  //---------------------------------

  return (
    <>
      <Typography variant="h5" component="h5">
        Editar
      </Typography>
      <UpdateClient
        updateUser={updateUser}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <Typography variant="h5" component="h5">
        Lista de Usuarios
      </Typography>
      <TableClients
        users={users}
        setDataToEdit={setDataToEdit}
        deleteUser={deleteUser}
      />
    </>
  );
};

export default ListClient;
