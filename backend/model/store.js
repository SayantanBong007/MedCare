import mongoose, {Schema} from "mongoose";

const storeSchema = new Schema(
    {
        ownername:{
            type: String,
            required: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        
        location:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
        },
        storename:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        noofworker:{
            type: Number,
            required: true,
            min: 2, 
            max:50
        },
        stock:[
            {
                type: Schema.Types.ObjectId,
                ref: "Medicine"
            }
        ]
    },
    {
        timestamps: true
    }

)


export const  Store = mongoose.model("Store", storeSchema)