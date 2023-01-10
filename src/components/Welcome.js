import React from "react";
import Navbar from "../redux/navbar";
import Stopwatch from "./Stopwatch";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.page}>
      <Navbar />
      <Stopwatch />
    </div>
  );
};

export default Welcome;
