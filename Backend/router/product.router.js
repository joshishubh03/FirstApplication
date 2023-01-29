import express from "express";
import {save,list,edit,remove} from "../controller/product.controller.js";
import multer from "multer";
const upload  = multer({dest:'public/images'});
const Router = express.Router();

Router.post("/save",upload.single("productImage"),save);
Router.get("/list",list);
Router.post("/edit",edit);
Router.post("/delete",remove);

export default Router;