import { Request, Response } from "express";
import { Order } from "../models/Order";
import { Product } from "../models/Product";

export const createOrder = async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  const totalAmount = product.price * quantity;

  const order = await Order.create({
    productId,
    quantity,
    totalAmount,
    paymentStatus: "pending",
  });

  res.status(201).json(order);
};

export const getOrders = async (_: Request, res: Response) => {
  const orders = await Order.find().populate("productId");
  res.json(orders);
};
