import React, { useState } from "react";
import { Card } from "@mui/material";
import { Product, ProductAddToCard, ProductImage } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDetail";

const SingleProductDesktop = ({ product, matches }) => {
  const [showOptions, setShowOptions] = useState(false);

  const [ProductDetailDialog, showProductDetailDialog] =
    useDialogModal(ProductDetail);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <>
      <Card elevation={5}>
        <Product
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ProductImage
            src={`http://localhost:5000/${product.imagen}`}
            width="300px"
            height="300px"
          />
          {showOptions && (
            <ProductAddToCard
              show={showOptions}
              variant="contained"
              onClick={() => showProductDetailDialog()}
            >
              Ver Producto
            </ProductAddToCard>
          )}
        </Product>
        <ProductMeta product={product} matches={matches} />
        <ProductDetailDialog product={product} />
      </Card>
    </>
  );
};

export default SingleProductDesktop;
