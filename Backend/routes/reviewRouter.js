import express from "express"
import { addToRiviews } from "../Controllers/reviewController.js"


const reviewRouter = express.Router()

reviewRouter.post("/", addToRiviews);

export default reviewRouter;