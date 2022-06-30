import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import {
  Facebook,
  WhatsApp,
  Instagram,
  Twitter,
  Send,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          background: Colors.shaft,
          color: Colors.white,
          p: { xs: 4, md: 10 },
          pt: 12,
          pb: 12,
          fontSize: { xs: "12px", md: "14px" },
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={6} lg={4}>
            <FooterTitle variant="body1">Acerca de Nosotros</FooterTitle>
            <Typography variant="caption2">
              Somos una empresa que se dedica a la venta de cámaras de seguridad
              y accesorios, además de brindar el servicio de instalación para
              nuestros clientes.
            </Typography>
            <Box
              sx={{
                mt: 4,
                color: Colors.dove_gray,
              }}
            >
              <Link
                href="https://www.facebook.com/herminia.condarco/"
                target="_blank"
                color={Colors.white}
              >
                <Facebook sx={{ mr: 1 }} />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=78618096"
                target="_blank"
                color={Colors.white}
              >
                <WhatsApp sx={{ mr: 1 }} />
              </Link>
              <Link color={Colors.white} href="#">
                <Instagram sx={{ mr: 1 }} />
              </Link>
              <Link color={Colors.white} href="#">
                <Twitter sx={{ mr: 1 }} />
              </Link>
            </Box>
          </Grid>
          <Grid item md={6} lg={2}>
            <FooterTitle variant="body1">Information</FooterTitle>
            <List>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  About us
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Order Tracking
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Privacy &amp; Policy
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Termns &amp; Conditions
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item md={6} lg={2}>
            <FooterTitle variant="body1">my account</FooterTitle>
            <List>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Login
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  My Cart
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  My Account
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Wishlist
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item md={6} lg={4}>
            <FooterTitle variant="body1">newsletter</FooterTitle>
            <Stack>
              <SubscribeTf
                color="primary"
                label="Email address"
                variant="standard"
              />
              <Button
                startIcon={<Send sx={{ color: Colors.white }} />}
                sx={{
                  mt: 4,
                  mb: 4,
                  background: Colors.dim_grey,
                }}
                variant="contained"
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: Colors.shaft,
          color: Colors.white,
          pb: { xs: 15, md: 4 },
          fontSize: { xs: "10px", md: "10px" },
        }}
      >
        <Typography textAlign="center">
          © 2022 Copyright: Herminia Condarco
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
