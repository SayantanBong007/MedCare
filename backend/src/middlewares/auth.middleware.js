import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../model/users.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const verifyJWTuser = asyncHandler(async (req, res, next) => {
  try {
    // console.log(req.cookies)
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    // console.log(token);
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

const verifyJWTmanager = asyncHandler(async (req, _, next) => {
  try {
    // console.log(req.cookies)
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    // console.log(token);
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    if (user.role != "manager") {
      res.status(401).json(new ApiResponse(404, null, "Unauthorized request"));
    }
    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

const verifyJWTceo = asyncHandler(async (req, _, next) => {
  try {
    // console.log(req.cookies)
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    // console.log(token);
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    if (user.role != "ceo") {
      res.status(401).json(new ApiResponse(404, null, "Unauthorized request"));
    }
    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

export { verifyJWTuser, verifyJWTmanager, verifyJWTceo };
