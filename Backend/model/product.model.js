import mongoose, { mongo }  from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDesc:{
        type:String,
        required:true
    },
    productImage:{
        type:String
    },
    categoryId:{
        type:mongoose.Schema.ObjectId,
        ref:"category"
    },
    brandId:{
        type:mongoose.Schema.ObjectId,
        ref:"brand"
    }
});
export const Product = mongoose.model("product",productSchema);