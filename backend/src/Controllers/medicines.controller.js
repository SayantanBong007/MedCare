import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js"
import { Medicine } from '../model/medicines.js';

const getMedicine = asyncHandler(async(req, res) => {
    const medicines = await Medicine.find(req.query);
    if (!medicines) {
        throw new ApiError(500, "Something went wrong while getting the medicine")
    }

    return res.status(201).json(
        new ApiResponse(200, medicines, "get medicines Successfully"))
})
const registerMedicine = asyncHandler(async(req, res) => {
    const medicines = await Medicine.create(req.body);
    if (!medicines) {
        throw new ApiError(500, "Something went wrong while storing the medicine")
    }
    console.log(medicines);
    return res.status(201).json(
        new ApiResponse(200, medicines, "register medicines Successfully"))

})
const getSpecificMedicine = asyncHandler(async(req, res) => {
    // console.log(req.params.medicineId);
    const medicines = await Medicine.findById(req.params.medicineId);
    if (!medicines) {
        throw new ApiError(500, "Something went wrong while getting the medicine")
    }

    return res.status(201).json(
        new ApiResponse(200, medicines, "get medicine Successfully"))

})
const updateMedicine = asyncHandler(async(req, res) => {
    const updateFields = req.body;

    // Remove the medicineId from the updateFields
    delete updateFields.medicineId;
    const medicines =await  Medicine.findByIdAndUpdate(req.params.medicineId, {
        $set: updateFields
    }, { new: true })

    if (!medicines) {
        throw new ApiError(500, "Something went wrong while updating  the medicine")
    }

    return res.status(201).json(
        new ApiResponse(200, medicines, "medicine update Successfully"))

})
const deleteMedicine = asyncHandler(async(req, res) => {
    const medicines = await Medicine.findByIdAndDelete(req.params.medicineId);
    if (!medicines) {
        throw new ApiError(500, "Something went wrong while deleting  the medicine")
    }

    return res.status(201).json(
        new ApiResponse(200, medicines, "medicine delete Successfully"))
})

export {
    getMedicine,
    registerMedicine,
    getSpecificMedicine,
    updateMedicine,
    deleteMedicine
}
