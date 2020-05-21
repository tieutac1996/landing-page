import React from "react";
import PropTypes from "prop-types";
import HTML from "./HTML";
import { useSelector } from "react-redux";
import "./index.scss";

Details.propTypes = {
  match: PropTypes.object,
};

function Details(props) {
  const { match } = props;

  const travel = useSelector((state) => state.data);

  const result = travel.filter((e) => e.slug === match.params.slug);
  console.log(result);
  return (
    <div className="Detail_items">
      {result.map((e, x) => (
        <div key={x}>
          <h1>{e.name}</h1>
          <div className="Detail_items--row">
            <img src={`/image/${e.image}`} alt="" />
            <div>{e.description}</div>
          </div>
        </div>
      ))}
      <HTML />
    </div>
  );
}

export default Details;
