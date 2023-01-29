import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import adminRouter from "./router/admin.router.js";
import categoryRouter from "./router/category.router.js";
import brandRouter from "./router/brand.router.js";
import productRouter from "./router/product.router.js";
import path from "path";
const app = express();


const publicpath=path.join(process.cwd(),'public');

app.use(express.static("images"));
app.use(express.static(publicpath));

app.use(cors());    
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://shubhamjoshi:MSFdRswTUJ00DXca@cluster0.w2m9xjp.mongodb.net/ecommerce?retryWrites=true&w=majority',err=>{
    if(err)
     console.log(err);
     else
     console.log("Mongodb Connected");
});

app.use("/admin",adminRouter);
app.use("/category",categoryRouter);
app.use("/brand",brandRouter);
app.use("/product",productRouter);
app.listen(3000,()=>{
    console.log("Server Started at 3000");
});