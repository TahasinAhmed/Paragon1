import mongoose from "mongoose"
const adminSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }

);

export const Admin = mongoose.model("Admin", adminSchema);