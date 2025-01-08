import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import PropertyDetails from "./components/PropertyDetails";

const App = () => {
  return (
    <div className="App">
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
