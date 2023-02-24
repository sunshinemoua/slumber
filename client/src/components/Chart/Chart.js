import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

const Chart = ({ entries }) => {
  const entriesCopy = [...entries];
  entriesCopy.forEach((entry) => {
    const formatSleepTime = moment(entry.sleepTime).format("l");
    entry.sleepTime = formatSleepTime;
  });

  console.log(entriesCopy);
  return (
    <div>
      <ResponsiveContainer width="95%" height={400}>
        <BarChart width={500} height={300} data={entriesCopy}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sleepTime" />
          <YAxis type="number" domain={[0, 24]} />
          <Tooltip />
          <Legend />
          <Bar
            name="Time Lapsed"
            dataKey="timeLapsed"
            barSize={20}
            fill="#2C74B3"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
