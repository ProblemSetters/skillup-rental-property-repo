import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "h8k-components";
import HomePage from "./components/HomePage";
import PropertyDetails from "./components/PropertyDetails";

const title = "Rental Property";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
