import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Details from "./Details";
import TravelTour from "./TravelTour";
function Main(props) {
  const { match } = props;

  const travel = useSelector((state) => state.data);
  
  return (
    <div>
      <Switch>
        <Route
          path="/product"
          exact
          component={() => <TravelTour travel={travel} match={match} />}
        />
        <Route path="/product/:slug" component={Details} travel={travel}/>
        <Route component={() => <TravelTour travel={travel} match={match} />} />
      </Switch>
    </div>
  );
}

export default Main;
