"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paddleService_1 = __importDefault(require("../services/paddleService"));
const PaymentController = {
    list: async (req, res) => {
        try {
            const products = await paddleService_1.default.getPackages();
            res.json({ success: true, products });
        }
        catch (error) {
            console.log(error);
            res.json({ "success": false });
        }
    }
};
exports.default = PaymentController;
// import { Request, Response } from "express";
// import { Order } from "../models/Order";
// // Simulate Paddle logic
// export const initiatePayment = async (req: Request, res: Response) => {
//   const { orderId } = req.body;
//   const order = await Order.findById(orderId).populate("productId");
//   if (!order){ res.status(404).json({ message: "Order not found" });
//   return
//     }
//   // Simulate Payment Link creation (use actual Paddle or Stripe API here)
//   const paymentLink = `https://fake-payment-gateway.com/pay?amount=${order.totalAmount}&orderId=${order._id}`;
//   // In real implementation, you'd use the Paddle API and return hosted checkout URL
//   res.json({
//     message: "Redirect user to this link",
//     paymentLink,
//   });
// };
