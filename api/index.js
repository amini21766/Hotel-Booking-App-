import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auths.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// connection to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("The mongodb connected!");
  })
  .catch((err) => {
    console.log("Mongodb connection Error: ", err);
  });

// testing route
app.get("/", (req, res) => {
  res.send("Welcome to Booking App!");
});

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/hotels", hotelRoute);
app.use("/api/v1/rooms", roomRoute);
app.use("/api/v1/users", userRoute);

// Error handler
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something Went Wrong!!!";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT} ...`);
});
