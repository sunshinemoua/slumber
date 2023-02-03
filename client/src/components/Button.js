import React from "react";
import classes from "./Button.module.css";

const Button = ({ buttonName, disabled }) => {
  return (
    <button disabled={disabled} className={classes["add-button"]} type="submit">
      {buttonName}
    </button>
  );
};

export default Button;
