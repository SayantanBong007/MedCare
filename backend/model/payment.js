import mongoose, {Schema} from "mongoose";

const paySchema = new Schema(
    {
        to:{
            type:String,
            trim:true,
        },
        subject:{
            type:String,
            trim:true,
        },
        description:{
            type:String,
            trim:true,
        }
    },
    {
        timestamps: true
    }

)


export const  Payment = mongoose.model("Payment", paySchema)