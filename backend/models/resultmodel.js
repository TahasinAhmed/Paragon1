import mongoose from "mongoose"
const resultSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    }

);

export const Result = mongoose.model("Result", resultSchema);