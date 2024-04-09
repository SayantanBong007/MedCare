const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    medicine:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Medicine'
    }
},{
    timestamps:true
});


var Review = mongoose.model('Review',reviewSchema);

module.exports = Review;