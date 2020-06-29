import React, { Fragment } from "react";
import Cards from "../components/layout/Cards";
const Home = () => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "space-between",
          margin: "10px",
        }}
      >
        <Cards />
      </div>
    </Fragment>
  );
};

export default Home;
