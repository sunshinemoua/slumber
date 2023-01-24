import React from "react";
import Moment from "react-moment";

const Entries = ({ entries }) => {
  const entryList = entries.map((entry) => (
    <li key={entry._id}>
      <Moment date={entry.sleepTime} format="MM/DD/YYYY hh:mm a" /> -
      <Moment date={entry.wakeTime} format="  MM/DD/YYYY hh:mm a" /> <br />
      Duration:
      {entry.timeLapsed}
    </li>
  ));
  console.log(entries);

  return (
    <div>
      <ul>{entryList}</ul>
    </div>
  );
};

export default Entries;
