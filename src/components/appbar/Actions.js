import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import {
  MyList,
  ActionContainerDesktop,
  ActionContainerMobile,
} from "../../styles/appbar";
import { ShoppingCart, Person } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Colors } from "../../styles/theme";
import { NavLink } from "react-router-dom";

const Actions = ({ matches }) => {
  const Component = matches ? ActionContainerMobile : ActionContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon>
            <NavLink
              to="/#"
              style={({ isActive }) => {
                return {
                  color: isActive ? Colors.dove_gray : Colors.white,
                  textDecoration: "none",
                };
              }}
            >
              <HomeIcon />
              Inicio
            </NavLink>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon>
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return {
                  color: isActive ? Colors.dove_gray : Colors.white,
                  textDecoration: "none",
                };
              }}
            >
              <ShoppingCart />
              Productos
            </NavLink>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  margin: "1rem 0",
                  color: isActive ? Colors.dove_gray : Colors.white,
                  textDecoration: "none",
                };
              }}
            >
              <ContactsIcon />
              Contacto
            </NavLink>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon>
            <NavLink
              to="/api/user/login"
              style={({ isActive }) => {
                return {
                  color: isActive ? Colors.dove_gray : Colors.white,
                  textDecoration: "none",
                };
              }}
            >
              <Person />
              Login
            </NavLink>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
};

export default Actions;
