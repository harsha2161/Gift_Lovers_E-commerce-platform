import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name : String,
    id : Number,
    price : Number,
    
})

const product = mongoose.model("product", productSchema);

export default product