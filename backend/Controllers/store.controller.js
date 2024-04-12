import { asyncHandler } from '../utils/asyncHandler.js'
import { Store } from '../model/store.js';
import { ApiResponse } from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js"
import mongoose from "mongoose";

const registerStore = asyncHandler(async(req,res)=>{
    console.log("hello");
    const {ownername,location,storename,noofworker,stock} = req.body;
    console.log(req.body);
    if ([ownername, location, storename, noofworker].some(field => !field || (typeof field === 'string' && field.trim() === ""))) {
        throw new ApiError(400, "All fields are required");
    }

    const existedStore = await Store.findOne({ storename: storename });

    if (existedStore) {
        throw new ApiError(409, "Store with storename already exists")
    }
    const store = await Store.create({
       ownername: ownername.toLowerCase(),
       location: location.toLowerCase(),
       storename: storename.toLowerCase(),
       noofworker : noofworker, 
       stock,
    })

    const createdStore = await Store.findById(store._id);
    

    if (!createdStore) {
        throw new ApiError(500, "Something went wrong while registering the Store")
    }

    return res.status(201).json(
        new ApiResponse(200, createdStore, "Store registered Successfully")
    )
})


const updateStoreDetails = asyncHandler(async(req,res)=>{
            const id = req.params._id;
            const updatefields = req.body;
            const store = await Store.findByIdAndUpdate(id,{
                $set:updatefields
            },{new:true})

            return res
            .status(200)
            .json(new ApiResponse(200, store, "Store details updated successfully"));
})


const getStoreDetails = asyncHandler(async(req,res)=>{

    const id = req.params._id;
    console.log(id);
    const store = await Store.findById(id);
    console.log(store);
    return res
    .status(200)
    .json(new ApiResponse(200, store, "Store details deleted successfully"));
})


const deleteStore = asyncHandler(async(req,res)=>{
    const id = req.params._id;
    const store = await Store.findByIdAndDelete(id);
    return res
    .status(200)
    .json(new ApiResponse(200, store, "Store details deleted successfully"));
})

const getAllStores = asyncHandler(async (req, res) => {
    try {
        const userCoordinates = req.body.coordinates; // Assuming coordinates are provided in the request body

        // Retrieve all stores from the database
        const stores = await Store.find();

        // Calculate distances of all stores from user coordinates
        stores.forEach(store => {
            const distance = calculateDistance(
                userCoordinates[0], 
                userCoordinates[1], 
                store.location.coordinates[0], 
                store.location.coordinates[1]
            );
            const time = distance/40;
            store.distance = distance;
            store.time = time;
        });

        // Sort stores by distance
        stores.sort((a, b) => a.distance - b.distance);

        // Select the 5 nearest stores
        const nearestStores = stores.slice(0, 5);

        // Send the nearest stores as a response
        res.json(nearestStores);
    } catch (error) {
        // If an error occurs, send an error response
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Function to calculate distance using simple modulus
function calculateDistance(lat1, lon1, lat2, lon2) {
    const dx = lon2 - lon1;
    const dy = lat2 - lat1;
    return Math.sqrt(dx * dx + dy * dy);
}

export default getAllStores;

export {
    registerStore,
    updateStoreDetails,
    getStoreDetails,
    deleteStore,
    getAllStores
}