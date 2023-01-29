import { Category } from "../model/category.model.js";

export const list = async (req, res, next) => {
  let result = await Category.find();
  return res.status(201).json(result);
};

export const save = async (req, res, next) => {
  Category.create({ categoryName: req.body.category });
  return res.status(201).json({ categoryName: req.body.category });
};

export const edit = async (req, res, next) => {
  console.log(req.body.categoryId);
  console.log(req.body.value);

  const result = await Category.updateOne(
    { _id: req.body.categoryId },
    { $set: { categoryName: req.body.value } }
  );
  return res.status(201).json({ message: "Updated Successfully" });
};

export const remove = async (req, res, next) => {
  console.log(req.body.category._id);
  const obj = await Category.deleteOne({ _id: req.body.category._id });
  return res
    .status(201)
    .json({ status: true, message: "Deleted Successfully" });
};
