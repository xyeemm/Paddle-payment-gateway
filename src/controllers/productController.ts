import { Request, Response } from "express";
import { Product } from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, stock } = req.body;
  const product = await Product.create({ name, price, description, stock });
  console.log(" Product Created:");
  res.status(201).json(product);
};

export const getProducts = async (_: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (!product){res.status(404).json({ message: "Product not found" });
    return} 
  res.json(product);
};
