import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Order } from "../model/order.js";

const postOrder = asyncHandler(async (req, res) => {
  const order = await Order.create(req.body);
  if (!order) {
    throw new ApiError(500, "Something went wrong while storing the order");
  }
  console.log(order);

  return res
    .status(201)
    .json(new ApiResponse(200, order, "register order Successfully"));
});

const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.find(req.query);
  if (!order.length) {
    throw new ApiError(404, "No orders found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, order, "Orders retrieved successfully"));
});

export { postOrder, getOrder };
