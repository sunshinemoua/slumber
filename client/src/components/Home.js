import React from "react";
import Navbar from "../redux/navbar";
import Form from "./Form";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.page}>
      <Navbar />
      <Form />
    </div>
  );
};

export default Home;
