import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Worker } from "../model/worker.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerWorker = asyncHandler(async (req, res) => {
  console.log("hello");
  const { workername, storename, experience, post } = req.body;
  console.log(req.body);
  if (
    [workername, storename, experience, post].some(
      (field) => !field || (typeof field === "string" && field.trim() === "")
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existedWorker = await Worker.findOne({ workername: workername });

  if (existedWorker) {
    throw new ApiError(409, "Worker already exists");
  }
  const worker = await Worker.create({
    workername: workername.toLowerCase(),
    storename: storename,
    post: post,
    experience,
  });

  const createdWorker = await Worker.findById(worker._id);

  if (!createdWorker) {
    throw new ApiError(
      500,
      "Something went wrong while registering the Worker"
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, createdWorker, "Worker registered Successfully")
    );
});

const updateWorkerDetails = asyncHandler(async (req, res) => {
  const id = req.params._id;
  const updatefields = req.body;
  const worker = await Worker.findByIdAndUpdate(
    id,
    {
      $set: updatefields,
    },
    { new: true }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, worker, "Worker details updated successfully"));
});

const getWorkerDetails = asyncHandler(async (req, res) => {
  const id = req.params._id;
  console.log(id);
  const worker = await Worker.findById(id);
  console.log(worker);
  return res
    .status(200)
    .json(new ApiResponse(200, worker, "Worker details deleted successfully"));
});

const getworker = asyncHandler(async (req, res) => {
  const worker = await Worker.find(req.query);
  if (!worker.length) {
    throw new ApiError(404, "No worker found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, worker, "worker retrieved successfully"));
});

const deleteWorker = asyncHandler(async (req, res) => {
  const id = req.params._id;
  const worker = await Worker.findByIdAndDelete(id);
  return res
    .status(200)
    .json(new ApiResponse(200, worker, "Worker details deleted successfully"));
});

export {
  registerWorker,
  updateWorkerDetails,
  getWorkerDetails,
  deleteWorker,
  getworker,
};
