import React from "react";
import Moment from "react-moment";
import classes from "./Entries.module.css";
const Entries = ({ entries }) => {
  const entryList = entries.map((entry) => (
    <div key={entry._id} className={classes["entry-wrapper"]}>
      <li>
        <Moment
          className={classes.date}
          date={entry.sleepTime}
          format="MM/DD/YYYY"
        />
        <span className={classes.duration}> Duration: {entry.timeLapsed}</span>
      </li>
    </div>
  ));
  console.log(entries);

  return (
    <div>
      <ul>{entryList}</ul>
    </div>
  );
};

export default Entries;
