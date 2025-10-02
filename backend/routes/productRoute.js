import express from "express";
import multer from "multer";
import {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

const storage = multer.diskStorage({});
const upload = multer({ storage });

productRouter.get("/list", listProducts);
productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1" },
    { name: "image2" },
    { name: "image3" },
    { name: "image4" },
  ]),
  addProduct
);
productRouter.delete("/remove", adminAuth, removeProduct);
productRouter.get("/single", singleProduct);

export default productRouter;
