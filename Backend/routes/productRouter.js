import express from "express"
import {addReview, deleteProduct, getProduct, getProductById, saveProduct, updateProduct } from "../Controllers/productController.js"

const productRouter = express.Router()

productRouter.post("/addProduct", saveProduct);
productRouter.get("/viewProduct", getProduct);
productRouter.delete("/:productId", deleteProduct);
productRouter.put("/:productId",updateProduct);
productRouter.get("/:productId", getProductById);
productRouter.post("/:productId/reviews",addReview);


export default productRouter;
