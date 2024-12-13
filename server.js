const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");

require("dotenv").config();

const app = express();

app.listen(3000, () => {});

// Middleware для обработки JSON
app.use(express.json());

app.post("/api/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.v9bbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  )
  .then(() => console.log(`### Connected!`))
  .catch((err) => console.log("### db connection error", err));
