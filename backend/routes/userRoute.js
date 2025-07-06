import express from "express";
import {User} from "../models/usermodel.js";
const router = express.Router();

router.post("/", async (request, response)=>{
    try{
        if(
            !request.body.Name ||
            !request.body.Email ||
            !request.body.Password ||
            !request.body.BranchName ||
            !request.body.RollNo ||
            !request.body.BatchNo ||
            !request.body.DateOfBirth ||
            !request.body.FatherName ||
            !request.body.MotherName ||
            !request.body.DateOfBirth ||
            !request.body.FatherName ||
            !request.body.MotherName ||
            !request.body.PermanentAddress ||
            !request.body.PhoneNumber ||
            !request.body.GuardianPhoneNumber ||
            !request.body.HSCResult ||
            !request.body.HSCCollegeName ||
            !request.body.HSCRoll ||
            !request.body.HSCBoard ||
            !request.body.SSCResult ||
            !request.body.SSCCollegeName ||
            !request.body.SSCRoll ||
            !request.body.SSCBoard ||
            !request.body.Unit
        ){
            return response.status(400).send({
                message: 'Send all required fields.',
            });
        }
        const newUser = {
            Name: request.body.Name,
            Email: request.body.Email,
            Password: request.body.Password,
            ProfilePicture: request.body.ProfilePicture || "https://example.com/default-profile-picture.png", // Default profile picture URL
            UserType: request.body.UserType || "User", // Default user type is "User"
            BranchName: request.body.BranchName,
            RollNo: request.body.RollNo,
            BatchNo: request.body.BatchNo,
            DateOfBirth: request.body.DateOfBirth,
            FatherName: request.body.FatherName,
            MotherName: request.body.MotherName,
            PermanentAddress: request.body.PermanentAddress,
            PhoneNumber: request.body.PhoneNumber,
            GuardianPhoneNumber: request.body.GuardianPhoneNumber,
            HSCResult: request.body.HSCResult,
            HSCCollegeName:request.body.HSCCollegeName,
            HSCRoll:request.body.HSCRoll,
            HSCBoard:request.body.HSCBoard,
            SSCResult:request.body.SSCResult,
            SSCCollegeName:request.body.SSCCollegeName,
            SSCRoll:request.body.SSCRoll,
            SSCBoard:request.body.SSCBoard,
            Unit:request.body.Unit
        };
        const user = await User.create(newUser);
        return response.status(201).send(user);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

});

router.get("/", async (request, response)=>{
    try{
        const users = await User.find();
        return response.status(200).send(users);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get("/:id", async (request, response)=>{
    try{
        const {id} = request.params;
        const users = await User.findById(id);
        return response.status(200).json(users);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.put("/:id", async (request, response)=>{
    try{
        if(
            !request.body.Name ||
            !request.body.Email ||
            !request.body.Password ||
            !request.body.ProfilePicture ||
            !request.body.UserType ||
            !request.body.BranchName ||
            !request.body.RollNo ||
            !request.body.BatchNo ||
            !request.body.DateOfBirth ||
            !request.body.FatherName ||
            !request.body.MotherName ||
            !request.body.PermanentAddress ||
            !request.body.PhoneNumber ||
            !request.body.GuardianPhoneNumber ||
            !request.body.HSCResult ||
            !request.body.HSCCollegeName ||
            !request.body.HSCRoll ||
            !request.body.HSCBoard ||
            !request.body.SSCResult ||
            !request.body.SSCCollegeName ||
            !request.body.SSCRoll ||
            !request.body.SSCBoard ||
            !request.body.Unit
        ){
            return response.status(400).send({
                message: 'Send all required fields.',
            });
        }
        const {id} = request.params;
        const updatedUser = await User.findByIdAndUpdate(id, request.body);
        if(!updatedUser){
            return response.status(404).send({message: 'User not found.'});
        }
        return response.status(200).send({
            message: 'User updated successfully.',
            user: updatedUser
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.delete("/:id", async (request, response)=>{
    try{
        const {id} = request.params;    
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser){
            return response.status(404).send({message: 'User not found.'});
        }
        return response.status(200).json({
            message: 'User deleted successfully.',
            user: deletedUser
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;