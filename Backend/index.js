import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import jwt, { decode } from "jsonwebtoken";
import userRouters from "./routes/userRoutes.js";
import productRouter from "./routes/productRouter.js";
import reviewRouter from "./routes/reviewRouter.js";
import orderRouter from "./routes/orderRoute.js";

var app = express()

//middlewares 
app.use(bodyParser.json())

// jwt authondication middleware system
app.use(

  (req,res,next) => {

    const tokenString = req.header("Authorization")
    if(tokenString != null){

      const token = tokenString.replace("Bearer ", "")
      //console.log(token);
      jwt.verify(token, "newziland@28", 

        (error, decoded) => {
          if(decoded != null){
            console.log(decoded);
            req.user = decoded;
            next()

          }else{
            console.log("invilid token");
          }
        }
      )
    }else{
        next()  // request transfer to next 
    }
})

//post and sb url
const PORT = 5000;
const db_URL = "mongodb+srv://prabhathharsha77_db_user:wrYjIIXVbVCMEiso@cluster0.52fd1y3.mongodb.net/?appName=Cluster0"

//connecting databse and backend saver
mongoose.connect(db_URL)
  .then(() => {
    console.log("Database is connected ");

    app.listen(PORT, () => {
      console.log("Server connected with PORT", PORT);
    }); 

  })
  .catch(
    (err) => {
    console.log("Database connection failed ");
    console.log(err); 
  });

  //routers calling
  app.use("/users", userRouters);
  app.use("/product", productRouter);
  app.use("/review", reviewRouter);
  app.use("/order", orderRouter);
  
  

  
  