import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Card from "../Card/Card";
import classes from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Form = () => {
  const [sleepTime, setSleepTime] = useState(false);
  const [wakeTime, setWakeTime] = useState(false);
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
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  const addEntry = async (event) => {
    event.preventDefault();
    const timeLapsed = moment(wakeTime)
      .diff(moment(sleepTime), "hours", true)
      ?.toFixed(2);

    const entry = {
      sleepTime,
      wakeTime,
      timeLapsed,
    };

    try {
      await axios.post(url, entry);
      await getEntries();
      alert("successfully added entry");
      setSleepTime(false);
      setWakeTime(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  const handleSleepTimeChange = (sleepTime) => {
    setSleepTime(sleepTime);
  };

  const handleWakeTimeChange = (wakeTime) => {
    setWakeTime(wakeTime);
  };

  return (
    <div className={classes.container}>
      <Card>
        <form className={classes.form} onSubmit={addEntry}>
          <h2 className={classes.title}>Enter Times</h2>

          <Input
            placeholderText={"Sleep Time"}
            selected={sleepTime}
            onChange={handleSleepTimeChange}
          />

          <Input
            placeholderText={"Wake Time"}
            selected={wakeTime}
            onChange={handleWakeTimeChange}
          />

          <Button
            buttonName={"Save Entry"}
            disabled={!wakeTime || !sleepTime}
          />
        </form>
      </Card>
    </div>
  );
};

export default Form;
