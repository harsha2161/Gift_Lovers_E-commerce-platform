import express from "express"
import { BlockUser, createUser, DeleteUSer, loginUser, veiwUsers } from "../Controllers/userController.js";

const userRouters = express.Router();

userRouters.post("/signup", createUser);
userRouters.post("/signin", loginUser);
userRouters.post("/blockusers/:email",BlockUser);
userRouters.post("/deleteuser/:email",DeleteUSer)
userRouters.get("/", veiwUsers);

export default userRouters;
