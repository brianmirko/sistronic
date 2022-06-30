import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Colors } from "../../styles/theme";
import {
  Close,
  Facebook,
  Twitter,
  Instagram,
  Favorite,
} from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import { Product, ProductImage } from "../../styles/products";
import IncDec from "../ui";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

const ProductDetail = ({ open, onClose, product }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog TransitionComponent={SlideTransition} open={open} fullScreen>
      <DialogTitle
        sx={{
          background: Colors.primary,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ color: Colors.white }}
        >
          Descricion del Producto
          <IconButton onClick={onClose}>
            <Close sx={{ color: Colors.white }} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? "column" : "row"}>
          <Product
            sx={{
              mr: 4,
            }}
          >
            <ProductImage src={`http://localhost:5000/${product.imagen}`} />
          </Product>
          <ProductDetailInfoWrapper>
            {/* <Typography variant="subtitle1">SKU 123</Typography> */}
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.nombre_producto}
            </Typography>
            <Typography variant="body1">Marca: {product.marca}</Typography>
            <Typography variant="body1">Bs. {product.precio}</Typography>
            <Typography variant="body1">
              Descripcion: {product.descripcion}
            </Typography>
            <Typography variant="subtitle1">
              Disponible: <b>{product.stock}</b> en stock
            </Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <IncDec />
              <Button variant="contained">Add to Cart</Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                mt: 4,
                color: Colors.light,
              }}
            >
              <Favorite sx={{ mr: 2 }} />
              Add to wishlist
            </Box>
            <Box sx={{ mt: 4, color: Colors.light }}>
              <Facebook />
              <Twitter sx={{ marginLeft: 3 }} />
              <Instagram sx={{ marginLeft: 3 }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
