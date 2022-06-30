import { IconButton, TableRow, TableCell } from "@mui/material";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

const SingleClient = ({ data, setDataToEdit, deleteUser }) => {
  const handleEdit = () => {
    setDataToEdit(data);
    
  };

  return (
    <>
      <TableRow>
        <TableCell>{data.nombres}</TableCell>
        <TableCell>{data.apellidos}</TableCell>
        <TableCell>{data.telefono}</TableCell>
        <TableCell>{data.direccion}</TableCell>
        <TableCell>{data.rol}</TableCell>
        <TableCell>
          <IconButton color="success" onClick={handleEdit}>
            <BorderColorIcon />
          </IconButton>
          <IconButton color="error" onClick={() => deleteUser(data.id_usuario)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default SingleClient;
