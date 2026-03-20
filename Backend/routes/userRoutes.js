import express from "express"
import { createUser, loginUser, veiwUsers } from "../Controllers/userController.js";

const userRouters = express.Router();

userRouters.post("/signup", createUser);
userRouters.post("/signin", loginUser);
userRouters.get("/viewUsers", veiwUsers);


export default userRouters;
