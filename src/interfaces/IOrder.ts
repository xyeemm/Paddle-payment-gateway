// import { Types } from "mongoose";
import { IProduct } from "./IProduct";

// export interface IOrder {
//   _id: Types.ObjectId;
//   productId: Types.ObjectId | IProduct;  // can be populated
//   totalAmount: number;
//   customerEmail: string;
// }

import { Types, Document } from "mongoose";

export interface IOrder extends Document {
  productId: Types.ObjectId | IProduct;
  quantity: number;
  totalAmount: number;
  paymentStatus: "pending" | "paid" | "failed";
}
