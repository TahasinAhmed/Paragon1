import mongoose from "mongoose"
const courseSchema = mongoose.Schema({
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

export const Course = mongoose.model("Course", courseSchema);