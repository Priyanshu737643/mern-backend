//! SERVER
import express from "express";
import dbConnect from "./config/db.js";
import userRouter from "./routes/userRoute.js";
const app = express();

//? function to connect db and start server
const startServer = async () => {
  await dbConnect();
  app.listen(8080, console.log("server running"));
};
startServer();
app.use(express.json());
app.use("/api/users", userRouter);
