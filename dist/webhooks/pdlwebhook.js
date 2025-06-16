"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook = void 0;
const Order_1 = require("../models/Order");
const webhook = async (req, res) => {
    const event = req.body;
    try {
        if (event.event_type === "payment.succeeded") {
            const orderId = event.data.metadata.order_id;
            await Order_1.Order.findByIdAndUpdate(orderId, { paymentStatus: "paid" });
            console.log(`Order ${orderId} marked as paid`);
        }
        res.status(200).send("OK");
    }
    catch (err) {
        console.error("Webhook error", err);
        res.status(500).send("Webhook handling error");
    }
};
exports.webhook = webhook;
