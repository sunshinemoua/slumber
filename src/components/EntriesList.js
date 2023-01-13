import React, { useState } from "react";
import Moment from "react-moment";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Entries from "./Entries";

const EntriesList = () => {
  const [sleepTime, setSleepTime] = useState(new Date());
  const [wakeTime, setWakeTime] = useState(new Date());
  const [entries, setEntries] = useState([]);

  const handleSleepTimeChange = (sleepTime) => {
    setSleepTime(sleepTime);
  };

  const handleWakeTimeChange = (wakeTime) => {
    setWakeTime(wakeTime);
  };

  const addEntry = (event) => {
    event.preventDefault();
    const entry = {
      id: uuidv4(),
      sleepTime,
      wakeTime,
    };

    setEntries([...entries, entry]);
    console.log(entries);
  };

  return (
    <div>
      <Card>
        <form onSubmit={addEntry}>
          <label>
            Sleep Time:
            <Datepicker
              selected={sleepTime}
              onChange={handleSleepTimeChange}
              dateFormat="MM/dd/yyyy hh:mm a"
              showTimeInput
            />
          </label>
          <br />
          <label>
            Wake Time:
            <Datepicker
              selected={wakeTime}
              onChange={handleWakeTimeChange}
              dateFormat="MM/dd/yyyy hh:mm a"
              showTimeInput
            />
          </label>
          <button type="submit">ADD</button>
        </form>
      </Card>
      <Card>
        <h3>History</h3>
        <Entries entries={entries} />
      </Card>
    </div>
  );
};

export default EntriesList;
