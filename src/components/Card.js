import React from "react";
import classes from "./Card.module.css";

const Card = ({ children, ...props }) => {
  console.log(children);
  return (
    <div className={classes.card} {...props}>
      {children}
    </div>
  );
};

export default Card;
