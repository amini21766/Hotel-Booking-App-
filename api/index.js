import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auths.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/users.js";


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



// middlewares
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/hotels", hotelRoute);
app.use("/api/v1/rooms", roomRoute);
app.use("/api/v1/user", userRoute);







const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT} ...`);
});
