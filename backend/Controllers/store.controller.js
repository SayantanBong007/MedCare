const asyncHandler = require('../utils/asyncHandler.js');
const { Store } = require('../models/store.js');
const { ApiResponse } = require('../utils/ApiResponse.js');
const { ApiError } = require('../utils/ApiError.js');

const registerStore = asyncHandler(async (req, res) => {
    const { ownername, location, storename, noofworker, stock } = req.body;
    
    // Check if all required fields are provided
    if (![ownername, location, storename, noofworker].every(Boolean)) {
        throw new ApiError(400, 'All fields are required');
    }

    // Check if a store with the same name already exists
    const existedStore = await Store.findOne({ storename: storename });
    if (existedStore) {
        throw new ApiError(409, 'Store with storename already exists');
    }

    // Create a new store
    const store = await Store.create({
        ownername: ownername.toLowerCase(),
        location: location.toLowerCase(),
        storename: storename.toLowerCase(),
        noofworker: noofworker,
        stock,
    });

    // Retrieve the created store
    const createdStore = await Store.findById(store._id);

    if (!createdStore) {
        throw new ApiError(500, 'Something went wrong while registering the Store');
    }

    // Return success response
    res.status(201).json(new ApiResponse(200, createdStore, 'Store registered Successfully'));
});

// Similarly, convert other functions to use CommonJS syntax

module.exports = {
    registerStore,
    updateStoreDetails,
    getStoreDetails,
    deleteStore
};
