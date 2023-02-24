import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../redux/navbar";
import classes from "./History.module.css";
import LatestEntry from "../LastestEntry/LatestEntry";
import Chart from "../Chart/Chart";

const History = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/entries");
      setEntries(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.wrapper}>
      <Navbar />
      <LatestEntry entries={entries} />
      <h1 className={classes.label}> History </h1>
      <Chart entries={entries} setEntries={setEntries} />
    </div>
  );
};

export default History;
