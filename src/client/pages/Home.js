import React, { Fragment } from "react";

const Home = () => {

  const handleClick = () => {
    console.log("button clicked");
  }
  return (
    <Fragment>
      <div>Home Page</div>
      <button onClick={handleClick}>Click Here</button>
    </Fragment>
  );
};

export default Home;
