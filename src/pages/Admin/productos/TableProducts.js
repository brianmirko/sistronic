import React from "react";
import SingleProducts from "./SingleProducts";
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

const TableProducts = ({ products, setDataToEdit, deleteProduct }) => {
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
                <TableCell scope="col">#</TableCell>
                <TableCell scope="col">Nombre</TableCell>
                <TableCell scope="col">Marca</TableCell>
                <TableCell scope="col">Costo</TableCell>
                <TableCell scope="col">Precio</TableCell>
                <TableCell scope="col">Stock</TableCell>
                <TableCell scope="col">Imagen</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.length === 0 ? (
                <TableRow>
                  <TableCell scope="col" sx={{ color: "red" }}>
                    Sin datos
                  </TableCell>
                </TableRow>
              ) : (
                products.map((item) => {
                  return (
                    <SingleProducts
                      key={item.id_producto}
                      data={item}
                      setDataToEdit={setDataToEdit}
                      deleteProduct={deleteProduct}
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

export default TableProducts;
