import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import TableProducts from "./TableProducts";
import UpdateProduct from "./UpdateProduct";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [listUpdate, setListUpdate] = useState(false);

  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/products");
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
    setListUpdate(false);
  }, [listUpdate]);

  //---------------------------------
  const [dataToEdit, setDataToEdit] = useState({
    nombre_producto: "",
    marca: "",
    costo: "",
    precio: "",
    stock: "",
    descripcion: "",
  });

  const updateProduct = async (data) => {
    await axios.put(
      `http://localhost:5000/api/products/${data.id_producto}`,
      data
    );
    setListUpdate(true);
  };

  const deleteProduct = async (id) => {
    let isDelete = window.confirm(
      `Esta seguro de eliminar el registro con el id: ${id}?`
    );
    if (isDelete) {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
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
      <UpdateProduct
        updateProduct={updateProduct}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <Typography variant="h5" component="h5">
        Lista de Productos
      </Typography>
      <TableProducts
        products={products}
        setDataToEdit={setDataToEdit}
        deleteProduct={deleteProduct}
      />
    </>
  );
};

export default ListProduct;
