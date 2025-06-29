import mongoose from "mongoose"
const userSchema = mongoose.Schema({
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
        EnglishName:{
            type: String,
            required: true,
        },
        BanglaName:{
            type: String,
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
        }
    },
    {
        timestamps:true,
    }

);

export const User = mongoose.model("User",userSchema);