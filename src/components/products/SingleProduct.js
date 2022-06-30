import React from "react";
import { Card } from "@mui/material";
import { Product, ProductAddToCard, ProductImage } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDetail";

export default function SingleProduct({ product, matches }) {
  console.log(product.imagen);
  const [ProductDetailDialog, showProductDetailDialog] =
    useDialogModal(ProductDetail);

  return (
    <>
      <Product>
        <Card elevation={5}>
          <ProductImage
            src={`http://localhost:5000/${product.imagen}`}
            width="300px"
            height="300px"
          />
          <ProductMeta product={product} matches={matches} />
          <ProductAddToCard
            variant="contained"
            onClick={() => showProductDetailDialog()}
          >
            Ver Producto
          </ProductAddToCard>
        </Card>
      </Product>
      <ProductDetailDialog product={product} />
    </>
  );
}
