import React from "react";
import Moment from "react-moment";
import classes from "./LatestEntry.module.css";

const LatestEntry = ({ entries }) => {
  const entriesCopy = [...entries];
  const pop = entriesCopy.pop();

  return (
    <div>
      <h3 className={classes.title}> Most Recent Entry</h3>
      <div className={classes["outer-wrapper"]}>
        <div className={classes["date-wrapper"]}>
          <span className={classes["label"]}>Date</span>
          <Moment
            className={classes.date}
            date={pop?.sleepTime}
            format="MM/DD/YYYY"
          />
        </div>
        <div className={classes["time-wrapper"]}>
          <span className={classes["label"]}>Time </span>
          <span className={classes.time}>{pop?.timeLapsed + "h"}</span>
        </div>
      </div>
    </div>
  );
};

export default LatestEntry;
