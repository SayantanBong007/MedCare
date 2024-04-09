const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema

const PaymentSchema = new mongoose.Schema({
    
            productId : [String],
      
            paymentStatus:{
               type:Boolean,
               default: false
            },
            paymentVerifier: {
                type: String
            },

    // paymentIntent : {},

    // orderStatus : {
    //     type : String,
    //     default: 'Not processed yet',
    //     enum : [
    //         "Not processed yet",
    //         "Processing",
    //         "Dispatched",
    //         "Cancelled",
    //         "Delivered",
    //         "Cash On Delivery",
    //     ]
    // },

    orderedBy : {type: ObjectId, ref: "User"},

}, {timestamps : true})

module.exports = mongoose.model("PaymentSchema", PaymentSchema);