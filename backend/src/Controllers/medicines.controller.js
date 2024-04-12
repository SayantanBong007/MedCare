import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Medi } from "../model/medicines.js";

const getMedicine = asyncHandler(async (req, res) => {
  const medicines = await Medi.find(req.query);
  if (!medicines) {
    throw new ApiError(500, "Something went wrong while getting the medicine");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, medicines, "get medicines Successfully"));
});
const registerMedicine = asyncHandler(async (req, res) => {
  const medicines = await Medi.create(req.body);
  if (!medicines) {
    throw new ApiError(500, "Something went wrong while storing the medicine");
  }
  console.log(medicines);
  return res
    .status(201)
    .json(new ApiResponse(200, medicines, "register medicines Successfully"));
});
const getSpecificMedicine = asyncHandler(async (req, res) => {
  // console.log(req.params.medicineId);
  const medicines = await Medi.findById(req.params.medicineId);
  if (!medicines) {
    throw new ApiError(500, "Something went wrong while getting the medicine");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, medicines, "get medicine Successfully"));
});
const updateMedicine = asyncHandler(async (req, res) => {
  const updateFields = req.body;

  // Remove the medicineId from the updateFields
  delete updateFields.medicineId;
  const medicines = await Medi.findByIdAndUpdate(
    req.params.medicineId,
    {
      $set: updateFields,
    },
    { new: true }
  );

  if (!medicines) {
    throw new ApiError(
      500,
      "Something went wrong while updating  the medicine"
    );
  }

  return res
    .status(201)
    .json(new ApiResponse(200, medicines, "medicine update Successfully"));
});
const deleteMedicine = asyncHandler(async (req, res) => {
  const medicines = await Medi.findByIdAndDelete(req.params.medicineId);
  if (!medicines) {
    throw new ApiError(
      500,
      "Something went wrong while deleting  the medicine"
    );
  }

  return res
    .status(201)
    .json(new ApiResponse(200, medicines, "medicine delete Successfully"));
});

export {
  getMedicine,
  registerMedicine,
  getSpecificMedicine,
  updateMedicine,
  deleteMedicine,
};
