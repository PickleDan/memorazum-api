const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

app.listen(3000, () => {
  console.log(`### server started ${process.env.MONGO_USERNAME}`);
});

app.get("/", (req, res) => {
  res.send("### Welcome to the server!");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.v9bbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  )
  .then(() => console.log(`### Connected!`))
  .catch((err) => console.log("### db connection error", err));
