"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const router = express_1.default.Router();
router.post("/create-product", productController_1.createProduct); // POST /api/products
router.get("/get-all-products", productController_1.getProducts); // GET /api/products
router.get("/:id", productController_1.getProductById); // GET /api/products/:id
exports.default = router;
