import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  StyledToolbar,
  BannerToolbar,
  IconsToolbar,
  UserBoxToolbar,
} from "../../../styles/admin/navbarAdmin/styleNavbarAdmin";
import { useNavigate } from "react-router-dom";
import Promotions from "../promotions/Promotions";

const NavbarAdmin = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar color="primary" position="sticky">
        <StyledToolbar>
          <Typography variant="h6">SISTRONIC</Typography>
          {/* <BannerToolbar>Hola</BannerToolbar> */}
          <Promotions />
          {/* <IconsToolbar>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconsToolbar> */}
          <UserBoxToolbar>
            <Typography variant="span">Herminia</Typography>
            <IconButton onClick={handleClick}>
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                }}
                src="https://placeimg.com/100/100/nature"
              />
            </IconButton>
          </UserBoxToolbar>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => console.log("Profile")}>Profile</MenuItem>
          <MenuItem onClick={() => console.log("My account")}>
            My account
          </MenuItem>
          <MenuItem
            onClick={() => {
              const isConfirm = window.confirm("Seguro quieres salir?");
              if (isConfirm) {
                localStorage.clear();
                navigate("/");
              }
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default NavbarAdmin;
