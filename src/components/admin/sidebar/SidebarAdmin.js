import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { Switch } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function NestedList() {
  const [openClient, setOpenClient] = useState(true);
  const [openProducts, setOpenProducts] = useState(true);

  const navigate = useNavigate();

  const handleOpenClient = () => {
    setOpenClient(!openClient);
  };

  const handleOpenProduct = () => {
    setOpenProducts(!openProducts);
  };

  return (
    <>
      <List
        flex={1}
        sx={{ width: "100%", maxWidth: "250px", xs: "none", sm: "block" }}
      >
        <ListItemButton onClick={() => navigate("/admin")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={handleOpenClient}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
          {openClient ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openClient} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("admin-client-register")}
            >
              <ListItemIcon>
                <HowToRegIcon />
              </ListItemIcon>
              <ListItemText primary="Registrar Personal" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("admin-client-list")}
            >
              <ListItemIcon>
                <FormatListNumberedIcon />
              </ListItemIcon>
              <ListItemText primary="Lista del Personal" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleOpenProduct}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
          {openProducts ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("admin-product-register")}
            >
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Registrar Producto" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("admin-product-list")}
            >
              <ListItemIcon>
                <FormatListNumberedIcon />
              </ListItemIcon>
              <ListItemText primary="Lista Productos" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ModeNightIcon />
          </ListItemIcon>
          <Switch />
        </ListItemButton>
      </List>
    </>
  );
}
