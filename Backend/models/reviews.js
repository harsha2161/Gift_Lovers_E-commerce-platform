import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    
    productId : {
       required : true,
       type : String,  
    },

    userEmail : {
        required : true,
        type : String
    },

    review : {
        required : true,
        type : String
    },
 
    Stars : {
        typeof : Number
    }
})

 const review = mongoose.model("Review", reviewSchema);

 export default review