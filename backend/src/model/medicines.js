import mongoose, {Schema} from "mongoose";



const medicineSchema = new Schema({
    name:{
        type:String,
        required:true,
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
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5,
        default:3
    },
    storename:{
        type:String,
        required:true
    }

},{
    timestamps:true
});

export const Medicine = mongoose.model('Medicine',medicineSchema);