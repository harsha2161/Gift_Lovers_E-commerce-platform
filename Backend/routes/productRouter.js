import express from "express"
import {deleteProduct, getProduct, getProductById, saveProduct, updateProduct } from "../Controllers/productController.js"
import { addToRiviews } from "../Controllers/reviewController.js";

const productRouter = express.Router()

productRouter.post("/addProduct", saveProduct);
productRouter.get("/viewProduct", getProduct);
productRouter.delete("/:productId", deleteProduct);
productRouter.put("/:productId",updateProduct);
productRouter.get("/:productId", getProductById);
productRouter.post("/addReviews", addToRiviews);

export default productRouter;
