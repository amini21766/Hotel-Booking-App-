import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// connection to MongoDB
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("The mongodb connected!")
    }).catch((err) => {
        console.log("Mongodb connection Error: ", err);
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT} ...`);
});
