import React from "react";
import Banner from "components/Banner";
import Main from "components/Main";
import Images from "constants/image";

function Home(props) {
  return (
    <div>
      <Banner title="Discover travel moments" imageUrl={Images.BANNER}/>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default Home;
