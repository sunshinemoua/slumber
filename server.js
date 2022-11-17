const express = require("express");
const cors = require("cors");
const app = express();

// mounts cors to path
app.use(cors());

// listens to path and callback function runs when app serves path
//callback function takes req data and res arg
app.use("/login", (req, res) => {
  res.send({
    token: "testtest",
  });
});

app.listen(8080, () => console.log("API is running on http://localhost:8080"));
