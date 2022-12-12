import React from "react";
import "../styles/Banner.css";
import Logo from "../assets/logo.png";

const Banner = () => {
  return (
    <div className="lmj-banner">
      <img src={Logo} alt="La maison jungle" className="lmj-logo" />
      <h1>La maison junglea</h1>
    </div>
  );
};

export default Banner;
