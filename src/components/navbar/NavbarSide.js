import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export default function NavbarSide() {
  return (
    <div className="navbar_side">
      <Toolbar />
      <Divider />
      <List>
        {["Home", "Practice", "Test"].map((text, index) => (
          <ListItem key={text} disablePadding>
            {text === "Practice" ? (
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <NavLink to="/practice">
                  <ListItemText primary={text} />
                </NavLink>
              </ListItemButton>
            ) : text === "Test" ? (
              <ListItemButton>
                <ListItemIcon>
                  <QuizIcon />
                </ListItemIcon>
                <NavLink to="/test">
                  <ListItemText primary={text} />
                </NavLink>
              </ListItemButton>
            ) : text == "Home" ? (
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <NavLink to="/">
                  <ListItemText primary={text} />
                </NavLink>
              </ListItemButton>
            ) : null}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === "Logout" ? <LogoutIcon /> : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
