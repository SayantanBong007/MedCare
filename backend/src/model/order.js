import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    count: {
      type: Number,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 3,
    },
    orderId: {
      type: String,
      //   required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    location: {
      type: String,
      // required:true
    },
    storename: {
      type: String,
      required: true,
    },
    ordertype: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", orderSchema);
