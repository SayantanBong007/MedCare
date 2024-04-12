import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    medicine: {
      type: String,
      ref: "Medi",
    },
  },
  {
    timestamps: true,
  }
);

export const Review = mongoose.model("Review", reviewSchema);
