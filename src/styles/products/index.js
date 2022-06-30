import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { slideInBottom, slideInRight } from "../../animation";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // width: "100%",
  maxWidth: 300,
  // width: 300,
  // height: 350,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    // width: 100,
    // height: 110,
  },
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton, {
  shouldForwardProp: (prop) => prop !== "isFav",
})(({ isFav, theme }) => ({
  color: isFav ? Colors.primary : Colors.light,
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

export const ProductAddToCard = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "100%",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "100%",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProductActionsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation:
      show &&
      `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
}));
