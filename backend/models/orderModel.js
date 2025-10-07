import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, required: true, default: "Orders Placed" },
  paymentMethode: { type: String, required: true },
  payment: { type: Boolean, default: false, required: true },
  date: { type: Number, required: true },
});

const orderModel = mongoose.model.order || mongoose.model("order", orderSchema);

export default orderModel;
