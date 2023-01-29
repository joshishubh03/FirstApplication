import express from "express";
import {save,list,remove,edit} from "../controller/brand.controller.js";
const Router = express.Router();

Router.get("/list",list);
Router.post("/save",save);
Router.post("/edit",edit);
Router.post("/delete",remove);

export default Router; 