const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const medicineSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    count:{
        type:Number,
        required:true,
        min:0
    }

},{
    timestamps:true
});

var Medicines = mongoose.model('Medicine',medicineSchema);

module.exports=Medicines;

