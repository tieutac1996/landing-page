import React from "react";
import PropTypes from "prop-types";
import Images from "constants/image";
import "./index.scss";

TravelTour.propTypes = {
  travel: PropTypes.array,
};

TravelTour.defaultProps = {
  travel: null,
};

function TravelTour(props) {
  const { travel } = props;
  return (
    <div className="travel">
      {travel.map((travel, x) => (
        <div className="travel_items" key={x}>
          <div className="travel_items--top">
            <img
              className="travel_items--image"
              src={`/src/assets/image/${travel.image}`}
              alt="Demo"
            />
            <div className="travel_items--title">{travel.name}</div>
          </div>
          <div className="travel_items--description">{travel.description}</div>
        </div>
      ))}
    </div>
  );
}

export default TravelTour;
