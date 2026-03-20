import product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function saveProduct(req,res){

    if(!isAdmin(req)){
        res.status(403).json({
            massage : "you are not authorized to add a products"
        })
         return
    }

    const Product = new product(
        //{
        // name : req.body.name,
        // id : req.body.id,
        // price : req.body.price,  
        //}
        req.body // මොඩෙල් එකේ සියල්ල ඇඩ කර ඇත මේ කෝඩ් එකෙන් ඒක කෙලින්ම ඇඩ් කල හැක.
    );
 
try{
    const product = await Product.save()
    res.json({
        message : "product add successfull"
    })
     
    }catch(err){
        res.json(
            {
            message : "product add fails",
            error : err  // err යනු පැරමීටර් නමක් වන අතර එය විශේශිත නමක් නොවේ. ෆන්ශ්ස්න් එකේ වීදිහ අනුව එය ඔටෝම සෑදී ඇත. අලුතෙන් සෑදීමට අවශ්‍ය නොවේ.
            }
        )
    }
}

//<-- view all 
export async function getProduct(req,res){
    try{
        if(isAdmin(req)){
            const products = await product.find()
            res.json(products)

        }else{

            const products = await product.find({isAvailable : true})
            res.json(products)

        }

    }catch(err){
        res.json(
            {
                message : "product view  fails",
                error : err
            }
        )
   }
}
// වෙනත් ලොකු ප්‍රොජෙක්ට් වල දී ඩිලිටඩ් වල true false kirmima pamanak karai

export async function deleteProduct(req,res){
    
    if(!isAdmin){
        res.status(403).json({
        message : "you are not authorized to delete product"
    })
    return
    }

    try{

        await product.deleteOne({productId : req.params.productId}) // paramas ==>>> url eken ewana parameter eka bhawitha kirimaat bhawotha karana standed kramamya we....  >>>
        res.json({
            message : "product delete successfully",

                })

    }catch(err){
        res.json({
            message : "delete fails",
            error : err,

                 }
        )
    }   
}


export async function updateProduct(req,res) {

    if(!isAdmin){
        res.status(403).json({
            message : "are you not a admin"
        })
        return 
    }

    const productId = req.params.productId
    const updatingData = req.body

    try{
        
        await product.updateOne(
            {productId : productId},updatingData
        )

        res.json({
            message : "product update successfully"
        })
        
    }catch(err){
        res.status(500).json({
            message : "internal server error",
            error : err,
            }
         )
    }
}

export async function getProductById(req,res){

    const productId = req.params.productId

    try{

        const Product = await product.findOne({productId : productId})

        if(Product == null){

            res.status(404).json({
                message : "product not found"
            })
            return
        }

        if(Product.isAvailable){
            res.json(Product)

        }else{
            if(isAdmin(req)){
                res.json({
                    message : "product is out of stokes"
                })

            }else{
                res.json(Product)

            }
        }
        
    }catch(err) {
        res.status(500).json({
            message : "product find failed",
            error : err
        })
    }
}

 



