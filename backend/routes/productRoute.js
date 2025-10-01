import express from "express";
import {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/list", listProducts);
productRouter.post("/add", addProduct);
productRouter.delete("/remove", removeProduct);
productRouter.get("/single", singleProduct);

export default productRouter;
