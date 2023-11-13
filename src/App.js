import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
