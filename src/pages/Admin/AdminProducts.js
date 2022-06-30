import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const AdminProducts = () => {
  const [nombre_producto, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [costo, setCosto] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);

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
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    document.getElementById("nombre_producto").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("costo").value = 0;
    document.getElementById("precio").value = 0;
    document.getElementById("stock").value = 0;
    document.getElementById("descripcion").value = "";
    document.getElementById("imagen").value = null;
  };

  return (
    <>
      <form
        className="row g-3 needs-validation"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="nombre de producto"
            name="nombre_producto"
            onChange={(e) => setNombre(e.target.value)}
            required
            value={nombre_producto}
            id="nombre_producto"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Marca</label>
          <input
            type="text"
            className="form-control"
            placeholder="marca"
            name="marca"
            onChange={(e) => setMarca(e.target.value)}
            required
            value={marca}
            id="marca"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Costo</label>
          <input
            type="text"
            className="form-control"
            placeholder="costo"
            name="costo"
            onChange={(e) => setCosto(e.target.value)}
            required
            value={costo}
            id="costo"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="text"
            className="form-control"
            placeholder="precio"
            name="precio"
            onChange={(e) => setPrecio(e.target.value)}
            required
            value={precio}
            id="precio"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="text"
            className="form-control"
            placeholder="stock"
            name="stock"
            onChange={(e) => setStock(e.target.value)}
            required
            value={stock}
            id="stock"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descricion</label>
          <input
            type="text"
            className="form-control"
            placeholder="descripcion"
            name="descripcion"
            onChange={(e) => setDescripcion(e.target.value)}
            required
            value={descripcion}
            id="descripcion"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Archivo</label>
          <input
            type="file"
            className="form-control"
            name="imagen"
            onChange={(e) => setImagen(e.target.files[0])}
            required
            id="imagen"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};

export default AdminProducts;
