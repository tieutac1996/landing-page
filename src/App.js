import AboutUS from "components/AboutUs";
import Footer from "components/Footer";
import Header from "components/Header";
import Home from "components/Home";
import Main from "components/Main";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import store from "./redux/store";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUS} />
          <Route
            path="/product"
            component={(match) => <Main match={match} />}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
