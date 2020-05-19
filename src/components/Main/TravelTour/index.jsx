import React from "react";
import PropTypes from "prop-types";
import Images from "constants/image";

TravelTour.propTypes = {
  travel: PropTypes.array,
};

TravelTour.defaultProps = {
    travel : null
}

function TravelTour(props) {
  const { travel } = props;
  return (
    <div>
      {travel.map((travel,x) => (
        <div className="travel_items" key={x}>
          <img className="travel_items--image" src={Images.BA_VI}/>
          <div className="travel_items--title">{travel.name}</div>
          <div className="travel_items--description">{travel.description}</div>
        </div>
      ))}
    </div>
  );
}

export default TravelTour;
