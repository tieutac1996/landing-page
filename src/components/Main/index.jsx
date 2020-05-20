import React, { useEffect, useState } from "react";
import TravelTour from "./TravelTour";

function Main() {
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = "./api.json";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data } = responseJSON;
        console.log(responseJSON);
        setTravel(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return <div>{<TravelTour travel={travel} />}</div>;
}

export default Main;
