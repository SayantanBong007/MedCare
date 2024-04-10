import mongoose, {Schema} from "mongoose";



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

export const Medicine = mongoose.model('Medicine',medicineSchema);