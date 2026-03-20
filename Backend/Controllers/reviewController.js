import review from "../models/reviews.js";
import { isAdmin } from "./userController.js";

export async function addToRiviews(req,res){

    if(isAdmin){
        res.json({
            message : "admins can not add reviews"
        })
        return
    }

    try{
        const productId = body.params.productId
        review = req.body.review
            
            await product.updateOne(
                {productId : productId},review
            )
    
            res.json({
                message : "review update successfully"
            })
            
        }catch(err){
            res.status(500).json({
                message : "internal server error",
                error : err,
                }
             )
        }




    

}