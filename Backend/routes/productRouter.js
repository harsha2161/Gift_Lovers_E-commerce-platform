import express from "express"
import { saveProduct } from "../userControllers/productController.js"

const productRouter = express.Router()

productRouter.post("/addProduct", saveProduct);

export default productRouter;
