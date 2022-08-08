import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;
