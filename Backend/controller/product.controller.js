import {Product} from "../model/product.model.js";

export const save =(req,res,next)=>{
       req.body.productImage= req.file.filename;
       Product.create(req.body);
  return res.status(201).json({message:"Product Added"});
     
}

export const list = async (req, res, next) => {
        let result = await Product.find().populate({path:"categoryId"}).populate({path:"brandId"});
        console.log(result);
        return res.status(201).json(result);
      };

      export const edit = async (req, res, next) => {

        console.log(req.body);
      
        // const result = await Category.updateOne(
        //   { _id: req.body.categoryId },
        //   { $set: { categoryName: req.body.value } }
        // );
        // return res.status(201).json({ message: "Updated Successfully" });
      };
      
      export const remove = async (req, res, next) => {
        console.log(req.body);
        // console.log(req.body.category._id);
        // const obj = await Category.deleteOne({ _id: req.body.category._id });
        // return res
        //   .status(201)
        //   .json({ status: true, message: "Deleted Successfully" });
      };
      