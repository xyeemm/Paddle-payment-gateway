"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProducts = exports.createProduct = void 0;
const Product_1 = require("../models/Product");
const createProduct = async (req, res) => {
    const { name, price, description, stock } = req.body;
    const product = await Product_1.Product.create({ name, price, description, stock });
    console.log(" Product Created:");
    res.status(201).json(product);
};
exports.createProduct = createProduct;
const getProducts = async (_, res) => {
    const products = await Product_1.Product.find();
    res.json(products);
};
exports.getProducts = getProducts;
const getProductById = async (req, res) => {
    const product = await Product_1.Product.findById(req.params.id);
    if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    res.json(product);
};
exports.getProductById = getProductById;
