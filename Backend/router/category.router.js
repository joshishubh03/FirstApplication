import express from "express";
import {list,save,edit,remove} from "../controller/category.controller.js";
const Router = express.Router();

Router.get("/list",list);
Router.post("/save",save);
Router.post("/edit",edit);
Router.post("/delete",remove);
export default Router;