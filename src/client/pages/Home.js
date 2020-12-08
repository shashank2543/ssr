import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <Fragment>
      <div>Home Page</div>
      <button onClick={handleClick}>Click Here</button>
      <Link to="/users">Users Page</Link>
    </Fragment>
  );
};

const loadData = (store) => {
  console.log("inside home page");
};

export default {
  loadData,
  component: Home,
};
