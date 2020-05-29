import React from "react";
import Section from "./Section";
import logo from "./assets/logo-netflix.png";
import data from "./assets/data.json";
import "./App.css";

const sections = data.map((key) => {
  return <Section category={key.category} images={key.images}></Section>;
});

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo Netflix"></img>
      {sections}
    </div>
  );
}

export default App;
