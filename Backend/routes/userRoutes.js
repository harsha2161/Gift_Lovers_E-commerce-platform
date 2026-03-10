import express from "express"
import { createUser, loginUser } from "../userControllers/userController.js";

const userRouters = express.Router();

userRouters.post("/signup", createUser);
userRouters.post("/signin", loginUser);

export default userRouters;
