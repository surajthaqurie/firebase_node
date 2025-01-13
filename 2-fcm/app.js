const express = require("express");
const { fmcRouter } = require("./src/fcm.route");

const app = express();
const router = express.Router();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is ok");
});

app.use("/fcm", fmcRouter(router));

module.exports = { app };
