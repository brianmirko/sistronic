import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import IndexRoute from "./pages/IndexRoute";

const App = () => {
  return (
    <BrowserRouter>
      <IndexRoute />
    </BrowserRouter>
  );
};

export default App;
