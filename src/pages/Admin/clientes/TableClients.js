import React from "react";
import {
  Box,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@mui/material";
import SingleClient from "./SingleClient";

const TableClients = ({ users, setDataToEdit, deleteUser }) => {
  return (
    <>
      <Box p={4}>
        <TableContainer
          sx={{ minWidth: 650, paddingLeft: "50px" }}
          aria-label="simple table"
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell scope="col">Nombres</TableCell>
                <TableCell scope="col">Apellidos</TableCell>
                <TableCell scope="col">Telefono</TableCell>
                <TableCell scope="col">Direccion</TableCell>
                <TableCell scope="col">Cargo</TableCell>
                <TableCell scope="col">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell scope="col" sx={{ color: "red" }}>
                    Sin datos
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => {
                  return (
                    <SingleClient
                      key={user.id_usuario}
                      data={user}
                      setDataToEdit={setDataToEdit}
                      deleteUser={deleteUser}
                    />
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default TableClients;
