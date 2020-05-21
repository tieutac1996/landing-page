import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

TravelTour.propTypes = {
  travel: PropTypes.array,
};

TravelTour.defaultProps = {
  travel: null,
};

function TravelTour(props) {
  const { travel } = props;

  let result = travel.map((travel, x) => {
    return (
      <div className="travel_items" key={x}>
        <div className="travel_items--top">
          <img
            className="travel_items--image"
            src={`/image/${travel.image}`}
            alt={travel.image}
          />
          <Link className="travel_items--title" to={`/product/${travel.slug}`}>
            {travel.name}
          </Link>
        </div>
        <div className="travel_items--description">
          <div className="travel_items--description--details">{travel.description}</div>
        </div>
      </div>
    );
  });

  return <div className="travel">{result}</div>;
}

export default TravelTour;
