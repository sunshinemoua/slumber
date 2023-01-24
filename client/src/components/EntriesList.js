import React, { useEffect, useState } from "react";
import axios from "axios";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import Card from "./Card";
import Entries from "./Entries";

const EntriesList = () => {
  const [sleepTime, setSleepTime] = useState(new Date());
  const [wakeTime, setWakeTime] = useState(new Date());
  const [entries, setEntries] = useState([]);

  const url = "http://localhost:3001/entries";

  useEffect(() => {
    const fetchData = async () => {
      await getEntries();
    };
    fetchData();
  }, []);

  const getEntries = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setEntries(data);
      console.log("SUCCESS", data);
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  const addEntry = async (event) => {
    event.preventDefault();
    const entry = {
      sleepTime,
      wakeTime,
      timeLapsed,
    };

    try {
      await axios.post(url, entry);
      await getEntries();
    } catch (err) {
      console.log("ERROR", err);
    }

    console.log("FROM POST", entries);
  };

  const handleSleepTimeChange = (sleepTime) => {
    setSleepTime(sleepTime);
  };

  const handleWakeTimeChange = (wakeTime) => {
    setWakeTime(wakeTime);
  };

  const timeLapsed = moment
    .utc(
      moment(wakeTime, "MM/DD/YYYY HH:mm").diff(
        moment(sleepTime, "MM/DD/YYYY HH:mm")
      )
    )
    .format("HH:mm");

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
