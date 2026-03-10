import product from "../models/product.js";

export async function saveProduct(req,res){
    if(req.user == null){
        
        res.status(403).json({
            message : "unauthorized"
        })
        return
    }else if (req.user.role != "admin"){
        
        res.status(403).json({

            message : "you need to be admin"
            
        })
        return
    }

    const Product = new product({
        name : req.body.name,
        id : req.body.id,
        price : req.body.price,   
    })
    // Product.save().then(
    //     () =>{
    //         res.json({
    //             message : "product add sucessfull"
    //         })
    //     }
    // ).catch(
    //     () =>{
    //         res.json({
    //             message :"procuct add not complete"
    //         })
    //     })
try{
    const product = await Product.save()
    res.json(product,{
    
        message : "product add successfull"

    })
        
    }catch(err){
        res.json({

            message : "product add fails",
            error : err

        })
    }
 
}