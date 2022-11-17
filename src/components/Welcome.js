import React from "react";
import { NavLink, Link } from "react-router-dom";
import Card from "./Card";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.page}>
      <h2 className={classes.title}>Welcome to Slumber</h2>
      <div className={classes.link}>
        <NavLink className={classes.link} to="/About">
          About
        </NavLink>
        <NavLink className={classes.link} to="/Dashboard">
          Dashboard{" "}
        </NavLink>
        <NavLink className={classes.link} to="/FAQs">
          FAQs
        </NavLink>
      </div>

      <Card className={classes.intro}> TESTING TESTING</Card>
    </div>
  );
};

export default Welcome;
