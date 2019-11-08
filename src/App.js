import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <h1>NASA</h1>
    <h3>Photo of the Day!</h3>
    <PhotoList/>
    </div>
  );
}

export default App;
