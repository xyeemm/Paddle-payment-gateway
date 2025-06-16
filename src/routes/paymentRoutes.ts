import express from "express";
// import { initiatePayment } from "../controllers/paymentController";
import  {webhook}  from "../webhooks/pdlwebhook";
import PaymentController from "../controllers/paymentController";

const router = express.Router();

// router.post("/pay", initiatePayment); // POST /api/payment/pay
// POST /api/payment/webhook
router.post("/webhook", express.json({ type: "*/*" }), webhook); 
router.get("/get-all-products", PaymentController.list); // GET /api/products
export default router;
