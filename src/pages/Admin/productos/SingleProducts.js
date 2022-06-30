import { IconButton, TableRow, TableCell } from "@mui/material";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

const SingleProducts = ({ data, setDataToEdit, deleteProduct }) => {
  const handleEdit = () => {
    setDataToEdit(data);
  };

  return (
    <>
      <TableRow>
        <TableCell scope="row">#</TableCell>
        <TableCell>{data.nombre_producto}</TableCell>
        <TableCell>{data.marca}</TableCell>
        <TableCell>{data.costo}</TableCell>
        <TableCell>{data.precio}</TableCell>
        <TableCell>{data.stock}</TableCell>
        <TableCell>
          <img
            src={`http://localhost:5000/${data.imagen}`}
            width="50px"
            height="50px"
          />
        </TableCell>
        <TableCell>
          <IconButton color="success" onClick={handleEdit}>
            <BorderColorIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => deleteProduct(data.id_producto)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default SingleProducts;
