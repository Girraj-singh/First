import React, { useRef } from "react";
import { TextField, Button, Input } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Home } from "./Components/Home";
import { Log } from "./Components/Log";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div style={{ alignContent: "center" }}>
        <Router>
          <Routes>
            <Route element={<Log />} path="/" />
            <Route element={<Home />} path="/home" />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
