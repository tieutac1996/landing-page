import React from "react";
import Images from "constants/image";
import "./index.scss";


function Header() {
  return (
    <header>
      <nav className="header">
        <div>HOME</div>
        <div><img className="header_img" src={Images.LO_GO} alt="logo"/></div>
        <div>ABOUT US</div>
      </nav>
    </header>
  );
}

export default Header;
