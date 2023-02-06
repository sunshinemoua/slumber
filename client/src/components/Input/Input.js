import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "../Form/Form.module.css";

const Input = ({ placeholderText, selected, onChange }) => {
  return (
    <ReactDatePicker
      placeholderText={placeholderText}
      selected={selected}
      onChange={onChange}
      className={classes.datepicker}
      dateFormat="MM/dd/yyyy hh:mm a"
      showTimeInput
    />
  );
};

export default Input;
