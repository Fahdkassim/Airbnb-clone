import React from "react";
import logo from "../assets/Airbnb.png"

export default function Navbar() {
  return (
    <nav className="nav">
      <img rel="nav-logo" src={logo}/>
    </nav>
  );
}
