import mongoose, {Schema} from "mongoose";

const workerSchema = new Schema(
    {
        workername: {
            type: String,
            required: true,
            lowercase: true,
            trim: true, 
            index: true
        },

        storename:{
            type:Schema.Types.ObjectId,
            ref:"Store"
        },

        experience: {
            type: Number,
            required: true,
            min: 0, 
            max: 100
        },
        post:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

export const Worker = mongoose.model("Worker", workerSchema)