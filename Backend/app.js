const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//import routes
const authRoute = require("./routes/auth");

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to Mongo!!")
);

//middleware
app.use(express.json());

//route middleware
app.use("/api/user", authRoute);


app.listen(3000);
