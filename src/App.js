import React from "react";
import "./App.scss";
import Header from "components/Header";
import Banner from "components/Banner";
import Main from "components/Main";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
