import React from "react";
import Navbar from "../redux/navbar";
import EntriesList from "./EntriesList";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div>
      <Navbar />
      <EntriesList />
    </div>
  );
};

export default Welcome;
