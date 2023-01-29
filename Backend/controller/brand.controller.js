import {Brand} from "../model/brand.model.js";

        export const list = async(req,res,next)=>{
        const result = await Brand.find().populate({path:'categoryId'});
           return res.status(201).json(result);
} 
        export const save = (req,res,next)=>{
          console.log(req.body);
        Brand.create({brandName:req.body.brandName,categoryId:req.body.categoryId});
                 return res.status(201).json("Brand Added");
}

        export const  remove = async (req,res,next)=>{
        const obj = await Brand.deleteOne({_id:req.body._id})
         return res.status(201).json({status:true,message:"Deleted Successfully"});
}


        export const edit = async (req, res, next) => {
        console.log(req.body);
        const result = await Brand.updateOne(
          { _id: req.body.id },
          { $set: { categoryName: req.body.category,brandName:req.body.brand } }
        );
        return res.status(201).json({ message: "Updated Successfully" });
};