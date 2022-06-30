import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Appbar from "../components/appbar";
import Footer from "../components/footer";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      <br />
      Herminia Condarco
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    id_usuario: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLogin);

    axios
      .post("http://localhost:5000/api/user/login", userLogin)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("auth", '"yes"');
        navigate("/admin");
      })
      .catch(({ response }) => {
        console.log(response.data);
        window.alert(response.data.message);
      });
  };

  return (
    <div>
      <Appbar />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                my: 10,
                p: 2,
                width: 400,
                height: 500,
              },
            }}
          >
            <Paper elevation={10}>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    m: 1,
                    bgcolor: "primary.main",
                  }}
                >
                  <LockOutlined />
                </Avatar>
                <Typography variant="h5" component="h1">
                  Sign in
                </Typography>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 1 }}
                  onSubmit={handleSubmit}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    variant="standard"
                    id="id_usuario"
                    label="Carnet de Identidad"
                    name="id_usuario"
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    variant="standard"
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    type="form"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Ingresar
                  </Button>
                </Box>
              </Box>
              <Copyright />
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
  );
};

export default Login;
