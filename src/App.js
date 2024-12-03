import React from "react";
import "./App.css";
import "h8k-components";

const title = "React App";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
    </div>
  );
};

export default App;
