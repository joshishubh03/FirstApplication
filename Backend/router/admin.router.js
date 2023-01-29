import express from "express";
import {home} from "../controller/admin.controller.js";
const Router = express.Router();

Router.get("/home",home);

export default Router;