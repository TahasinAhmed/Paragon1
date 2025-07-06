import mongoose from "mongoose"
const adminSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    PhoneNumber: {
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
    Role: {
        type: String,
        required: true,
        enum: ['SuperAdmin', 'Admin'],
        default: 'Admin',
    },
    ProfilePicture: {
        type: String,
        default: 'https://example.com/default-profile-picture.png', // Placeholder URL
    },
    IsActive: {
        type: Boolean,
        default: true,
    },
},
    {
        timestamps: true,
    }

);

export const Admin = mongoose.model("Admin", adminSchema);