import React from "react";
import PropTypes from 'prop-types';
import "./index.scss";

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};



function Banner(props) {
  const {title ,imageUrl}  = props;
  return (
    <div className="banner">
      <div
        className="banner_bg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="banner_bg--title">{title}</div>
        <div className="banner_bg--container">
          <span className="spin_1"></span>
          <span className="spin_2"></span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
