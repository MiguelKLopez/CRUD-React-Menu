import React from "react";
import taco from "../img/taco-landing.jpg";
import "../css/LandingPage.css";
import Navegacion from "./Nav";

function LandingPage() {
  return (
    <div>
      <Navegacion />
      <h1>AkuzaBara</h1>
      <img src={taco} alt="" />
    </div>
  );
}

export default LandingPage;