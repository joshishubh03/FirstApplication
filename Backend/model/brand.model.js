import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({
    brandName:{
       type:String,
       required:true
    },
    categoryId:{
            type:mongoose.Schema.ObjectId,
            ref:"category"
}   
});
export const Brand = mongoose.model("brand",BrandSchema);