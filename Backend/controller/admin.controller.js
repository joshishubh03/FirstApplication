export const home = async (req,res,next)=>{
         const response = [{Name:"Shubham joshi",age:21}];
        // const response = await Category.find();
        res.status(201).json(response);
}