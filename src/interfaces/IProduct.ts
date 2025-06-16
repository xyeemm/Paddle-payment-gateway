// export interface IProduct {
//   name: string;
//   price: number;
//   description?: string;
//   stock?: number;
// }



import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  stock: number;
}
