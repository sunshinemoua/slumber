require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const entriesRouter = require("./routes/entries");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/entries", entriesRouter);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to database"));

app.listen(3001, () => {
  console.log("API is running on port 3001");
});
