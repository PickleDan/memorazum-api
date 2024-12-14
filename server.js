import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.route.js";

dotenv.config();

const app = express();

app.listen(3000, () => {});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRouter);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.v9bbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  )
  .then(() => console.log(`Connected!`))
  .catch((err) => console.log("DB connection error", err));
