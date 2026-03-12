import product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function saveProduct(req,res){

    if(!isAdmin(req)){
        res.status(403).json({
            massagge : "you are not authorized to add a products"
        })
         return
    }
   

    const Product = new product(
        //{
        // name : req.body.name,
        // id : req.body.id,
        // price : req.body.price,  
        //}
        req.body
    );
 
try{
    const product = await Product.save()
    res.json({
    
        message : "product add successfull"

    })
        
    }catch(err){
        res.json({

            message : "product add fails",
            error : err

        })
    }
 
}
