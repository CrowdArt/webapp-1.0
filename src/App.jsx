import React from "react";
import Router from "react-router";
import Routes from "./routes.jsx";
import { render } from "react-dom";

function App() {
  return(
    render (
      Routes,
      document.getElementById('container')
    )
  )
}

export default App;