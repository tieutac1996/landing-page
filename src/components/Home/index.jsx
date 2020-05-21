import React from "react";
import Banner from "components/Banner";
import Main from "components/Main";
import Images from "constants/image";

function Home() {
  return (
    <div>
      <Banner title="Discover travel moments" imageUrl={Images.BANNER} />
      <Main />
    </div>
  );
}

export default Home;
