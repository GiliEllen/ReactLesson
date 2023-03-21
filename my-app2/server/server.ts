import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();

const cors = require(`cors`);

dotenv.config();

const mongodb_uri = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.set("strictQuery", true);

mongoose
  .connect(mongodb_uri)
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("At mongoose.connect");
    console.log(err.message);
  });

app.use(express.json());
app.use(cookieParser());
app.use(cors());

import usersRoutes from "./API/userRoutes";
app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`server is actine on port: ${PORT}`);
});
