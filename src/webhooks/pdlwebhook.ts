
import { Request, Response } from "express";
import { Order } from "../models/Order";

export const webhook = async (req: Request, res: Response) => {
  const event = req.body;

  try {
    if (event.event_type === "payment.succeeded") {
      const orderId = event.data.metadata.order_id;

      await Order.findByIdAndUpdate(orderId, { paymentStatus: "paid" });
      console.log(`Order ${orderId} marked as paid`);
    }
    res.status(200).send("OK");

  } catch (err) {
    console.error("Webhook error", err);
    res.status(500).send("Webhook handling error");
  }
};
