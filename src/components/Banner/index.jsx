import React from "react";
import Images from "constants/image";
import "./index.scss";

function Banner() {
  return (
    <div className="banner">
      <div
        className="banner_bg"
        style={{ backgroundImage: `url(${Images.BANNER})` }}
      >
        <div className="banner_bg--title">Discover travel moments</div>
        <div className="banner_bg--container">
          <span className="spin_1"></span>
          <span className="spin_2"></span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
