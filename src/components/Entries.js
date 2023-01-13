import React from "react";
import Moment from "react-moment";

const Entries = ({ entries }) => {
  const entryList = entries.map((entry) => (
    <li key={entry.id}>
      <Moment date={entry.sleepTime} format="MM/DD/YYYY hh:mm a" /> -
      <Moment date={entry.wakeTime} format="  MM/DD/YYYY hh:mm a" /> <br />
      Duration:
      <Moment
        duration={entry.sleepTime}
        date={entry.wakeTime}
        format="  hh:mm"
      />
    </li>
  ));
  console.log(entryList);

  return (
    <div>
      <ul>{entryList}</ul>
    </div>
  );
};

export default Entries;
