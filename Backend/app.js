const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose.connect(process.env.DB_CONNECTION, { newUserUrlParser: true }, () =>
  console.log("Connected to Mongo!!")
);

app.listen(3000);
