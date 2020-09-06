const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//import routes
const authRoute = require("./routes/auth");

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to Mongo!!")
);

//middleware
app.use(express.json());
app.use(cors({ origin: true }));

//route middleware
app.use("/api/user", authRoute);

app.listen(3000);
