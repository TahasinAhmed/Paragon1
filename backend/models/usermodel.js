import mongoose from "mongoose"
const userSchema = mongoose.Schema({
        Name:{
            type: String,
            required: true,
        },
        Email:{
            type: String,
            required: true,
            unique: true,
        },
        Password:{
            type: String,
            required: true,
        },
        UserType:{
            type: String,
            required: true,
            enum: ["Admin", "User"],
            default: "User",
        },
        ProfilePicture:{
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        },
        BranchName:{
            type:String,
            required: true,
        },
        RollNo:{
            type:String,
            required: true,
        },
        BatchNo:{
            type:String,
            required: true,
        },
        DateOfBirth:{
            type: Date,
            required: true,
        },
        FatherName:{
            type: String,
            required: true,
        },
        MotherName:{
            type: String,
            required: true,
        },
        PermanentAddress:{
            type: String,
            required: true,
        },
        PhoneNumber:{
            type: String,
            required: true,
        },
        GuardianPhoneNumber:{
            type: String,
            required: true,
        },
        HSCResult:{
            type: String,
            required: true,
        },
        HSCCollegeName:{
            type:String,
            required: true,
        },
        HSCRoll:{
            type:String,
            required: true,
        },
        HSCBoard:{
            type:String,
            required: true,
        },
        SSCResult:{
            type: String,
            required: true,
        },
        SSCCollegeName:{
            type:String,
            required: true,
        },
        SSCRoll:{
            type:String,
            required: true,
        },
        SSCBoard:{
            type:String,
            required: true,
        },
        Unit:{
            type: String,
            required: true,
        },
        StudentSignature:{
            type: String,
        },
        GuardianSignature:{
            type: String,
        }, 
        ReceiverSignature:{
            type: String,
        },
        Status:{
            type: String,
            default: "Active",
        },
        


    },
    {
        timestamps:true,
    }

);

export const User = mongoose.model("User",userSchema);