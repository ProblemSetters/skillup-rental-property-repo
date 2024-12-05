import React from "react";
import "./App.css";
import "h8k-components";
import HomePage from "./components/HomePage";
// import PropertyDetails from "./components/PropertyDetails";

const title = "Rental Property";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <HomePage />
    </div>
  );
};

export default App;
