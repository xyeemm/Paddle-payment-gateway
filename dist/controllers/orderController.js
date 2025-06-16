"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.createOrder = void 0;
const Order_1 = require("../models/Order");
const Product_1 = require("../models/Product");
const createOrder = async (req, res) => {
    const { productId, quantity } = req.body;
    const product = await Product_1.Product.findById(productId);
    if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    const totalAmount = product.price * quantity;
    const order = await Order_1.Order.create({
        productId,
        quantity,
        totalAmount,
        paymentStatus: "pending",
    });
    res.status(201).json(order);
};
exports.createOrder = createOrder;
const getOrders = async (_, res) => {
    const orders = await Order_1.Order.find().populate("productId");
    res.json(orders);
};
exports.getOrders = getOrders;
