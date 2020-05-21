import Images from "constants/image";
import React from "react";
import { Link } from "react-router-dom";
import { GetAPI } from "redux/getAPI";
import "./index.scss";

function Header() {
  GetAPI();

  return (
    <header>
      <nav className="header">
        <Link to="/">HOME</Link>
        <a href="/">
          <img className="header_img" src={Images.LO_GO} alt="logo" />
        </a>
        <Link to="/about-us">ABOUT US</Link>
      </nav>
    </header>
  );
}

export default Header;
