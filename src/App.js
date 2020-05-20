import React from "react";
import "./App.scss";
import Header from "components/Header";
import Banner from "components/Banner";
import Main from "components/Main";
import AboutUS from "components/AboutUs";
import { BrowserRouter ,Switch ,Route } from "react-router-dom";
import Home from "components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUS} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
