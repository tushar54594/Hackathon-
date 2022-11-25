import React from "react";
import logo from "../icon.png";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <h2 className="heading">Healthify</h2>
    </div>
  );
}

export default Header;
