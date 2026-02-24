import {
  addUser,
  deleteUser,
  showUsers,
  login,
} from "../controllers/userController.js";

import express from "express";

const userRouter = express.Router();

userRouter.get("/showUsers", showUsers);
userRouter.post("/login", login);
userRouter.post("/addUser", addUser);
userRouter.delete("/deleteUser/:id", deleteUser);
export default userRouter;
