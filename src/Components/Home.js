import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Story } from "./Story";
import { Log } from "./Log";
import "./Home.css";

export const Home = () => {

  const navigate = useNavigate();
  const getUsername = localStorage.getItem("usernameData");
  const getPassword = localStorage.getItem("passwordData");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <>
      {getPassword && getUsername ? (
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
          <div>
            <Story/>
          </div>
        </div>
      ) : (
        <Log/>
      )}
    </>
  );
};
