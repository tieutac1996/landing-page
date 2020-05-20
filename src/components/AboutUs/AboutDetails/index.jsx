import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

AboutDetails.propTypes = {
  order: PropTypes.object,
};

AboutDetails.defaultProps = {
  order: null,
};

function AboutDetails(props) {
  const { order } = props;
  return (
    <div className="about_items">
      {order.check ? (
        <div>
          <img src={order.image} className="about_items--image" />
        </div>
      ) : (
        ""
      )}
      <div>
        <h1 className="about_items--title">{order.title}</h1>
        <p className="about_items--description">{order.description}</p>
      </div>
      {!order.check ? (
        <div>
          <img src={order.image} className="about_items--image" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AboutDetails;
