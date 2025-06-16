import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
} from "../controllers/productController";

const router = express.Router();

router.post("/create-product", createProduct); // POST /api/products
router.get("/get-all-products", getProducts); // GET /api/products
router.get("/:id", getProductById); // GET /api/products/:id

export default router;
