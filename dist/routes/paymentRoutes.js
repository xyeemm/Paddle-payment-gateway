"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { initiatePayment } from "../controllers/paymentController";
const pdlwebhook_1 = require("../webhooks/pdlwebhook");
const paymentController_1 = __importDefault(require("../controllers/paymentController"));
const router = express_1.default.Router();
// router.post("/pay", initiatePayment); // POST /api/payment/pay
// POST /api/payment/webhook
router.post("/webhook", express_1.default.json({ type: "*/*" }), pdlwebhook_1.webhook);
router.get("/get-all-products", paymentController_1.default.list); // GET /api/products
exports.default = router;
