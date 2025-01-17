import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import PropertyDetails from "./components/PropertyDetails";
import ContactUs from "./components/ContactUs";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
          <Route path="/property-details/:id" element={<PropertyDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/user-profile" element={<UserProfile user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
