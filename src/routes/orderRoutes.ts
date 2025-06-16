import express from "express";
import { createOrder, getOrders } from "../controllers/orderController";

const router = express.Router();

router.post("/create-order", createOrder); // POST /api/orders
router.get("/get-all-orders", getOrders); // GET /api/orders

export default router;
