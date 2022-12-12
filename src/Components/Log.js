import React from "react";
import { useRef } from "react";
import { Home } from "./Home";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

import "./Log.css";

export const Log = () => {
  var navigate = useNavigate();
  const username = useRef();
  const password = useRef();

  const getUsername = localStorage.getItem("usernameData");
  const getPassword = localStorage.getItem("passwordData");

  const handelClick = () => {
    if (username.current.value == "foo" && password.current.value == "bar") {
      localStorage.setItem("usernameData", "foo");
      localStorage.setItem("passwordData", "bar");
      // navigate("home");
      window.location.reload();
    }
  };

  const handleHome = () => {
    navigate("home");
  };

  return (
    <div>
      <div className="mainBox">
        {getUsername && getPassword ? (
          <Home/>
        ) : (
          <>
            <form onClick={handelClick}>
              <AccountCircleIcon
                sx={{
                  textAlign: "center",
                  fontSize: "5.5rem",
                  color: "#49A6BA",
                }}
              />
              <div>
                <input
                  label="Username"
                  type="text"
                  placeholder="User Name"
                  ref={username}
                />
              </div>
              <br />
              <div>
                <input
                  label="password"
                  type="password"
                  placeholder="Password"
                  ref={password}
                />
              </div>
              <br />
              <Button
                variant="contained"
                color="primary"
                endIcon={<LoginIcon />}
              >
                Login
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
