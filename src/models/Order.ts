import mongoose, { Schema } from "mongoose";
import { IOrder } from "../interfaces/IOrder";

const orderSchema = new Schema<IOrder>(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model<IOrder>("Order", orderSchema);












// import mongoose, { Document, Schema } from "mongoose";

// export interface IOrder extends Document {
//   productId: mongoose.Types.ObjectId;
//   quantity: number;
//   totalAmount: number;
//   paymentStatus: "pending" | "paid" | "failed";
// }

// const orderSchema = new Schema<IOrder>(
//   {
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
//     quantity: { type: Number, required: true },
//     totalAmount: { type: Number, required: true },
//     paymentStatus: {
//       type: String,
//       enum: ["pending", "paid", "failed"],
//       default: "pending",
//     },
//   },
//   { timestamps: true }
// );

// export const Order = mongoose.model<IOrder>("Order", orderSchema);
