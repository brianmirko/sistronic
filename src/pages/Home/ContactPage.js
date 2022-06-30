import React from "react";
import Appbar from "../../components/appbar";
import Footer from "../../components/footer";
import Carousel from "../../components/carousel/index2Carousel";
import { Card, Container, Box, Typography, Grid } from "@mui/material";

const ContactPage = () => {
  return (
    <>
      <Appbar />
      <Container maxWidth="md" sx={{ background: "#fff", paddingY: "50px" }}>
        <Card elevation={10}>
          <Carousel />
        </Card>
      </Container>
      <Container maxWidth="md" sx={{ background: "#fff", paddingTop: "20px" }}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h4">Nosotros</Typography>
        </Box>
        <Typography variant="body1">
          Somos una empresa que se dedica a la venta de cámaras de seguridad y
          accesorios, además de brindar el servicio de instalación para nuestros
          clientes.
        </Typography>
      </Container>
      <Container maxWidth="md" sx={{ background: "#fff", paddingTop: "20px" }}>
        <Box display="flex">
          <Typography variant="h5">Mision</Typography>
        </Box>
        <Typography variant="body1">
          Contribuir a la generación de un ambiente confiable y seguro mediante
          los productos destinados a la videovigilancia y servicios de
          instalación a precios accesibles para todos nuestros clientes.
        </Typography>
      </Container>
      <Container maxWidth="md" sx={{ background: "#fff", paddingTop: "20px" }}>
        <Box display="flex">
          <Typography variant="h5">Vision</Typography>
        </Box>
        <Typography variant="body1">
          Ser una empresa ampliamente reconocida a nivel nacional, lider en el
          mercado de soluciones integrales de seguridad.
        </Typography>
      </Container>
      <Container maxWidth="md" sx={{ background: "#fff", paddingY: "50px" }}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h4">Nuestra ubicación</Typography>
        </Box>
        <Typography variant="caption2">
          Avenida Julio Valdez entre calle Topater y Estructurante.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;
