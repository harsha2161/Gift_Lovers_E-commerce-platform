import express from "express"
import {deleteProduct, getProduct, getProductById, saveProduct, updateProduct } from "../userControllers/productController.js"

const productRouter = express.Router()

productRouter.post("/addProduct", saveProduct);
productRouter.get("/viewProduct", getProduct);
productRouter.delete("/:productId", deleteProduct);
productRouter.put("/:productId",updateProduct);
productRouter.get("/:productId", getProductById);


export default productRouter;
