import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import mongoDbConnect from "./server";

dotenv.config();
const app = express();
app.use(express.json());
mongoDbConnect();

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);




export default app;
