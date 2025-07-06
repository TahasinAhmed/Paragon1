import express from "express";
import {Admin} from "../models/adminmodel.js";
const router = express.Router();

router.post("/Admin/", async (request, response)=>{
    try{
        if(
            !request.body.Name ||
            !request.body.PhoneNumber ||
            !request.body.Email ||
            !request.body.Password ||
            !request.body.Role ||
            !request.body.ProfilePicture

        ){
            return response.status(400).send({
                message: 'Send all required fields.',
            });
        }
        const newAdmin = {
            Name: request.body.Name,
            PhoneNumber: request.body.PhoneNumber,
            Email: request.body.Email,
            Password: request.body.Password,
            Role: request.body.Role,
            ProfilePicture: request.body.ProfilePicture
        };
        const admin = await Admin.create(newAdmin);
        return response.status(201).send(admin);
    }
    catch(error){
        console.log(error.message);
        const newAdmin = {
            Name: request.body.Name,
            PhoneNumber: request.body.PhoneNumber,
            Email: request.body.Email,
            Password: request.body.Password,
            Role: request.body.Role,
            ProfilePicture: request.body.ProfilePicture
        };
        const admin = await Admin.create(newAdmin);
        return response.status(201).send(admin);
    }

});

router.get("/Admin/", async (request, response)=>{
    try{
        const admins = await Admin.find();
        return response.status(200).send(admins);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get("/Admin/:id", async (request, response)=>{
    try{
        const {id} = request.params;
        const admin = await Admin.findById(id);
        return response.status(200).json(admin);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.put("/Admin/:id", async (request, response)=>{
    try{
        if(
            !request.body.Name ||
            !request.body.PhoneNumber ||
            !request.body.Email ||
            !request.body.Password ||
            !request.body.Role ||
            !request.body.ProfilePicture
        ){
            return response.status(400).send({
                message: 'Send all required fields.',
            });
        }
        const {id} = request.params;
        const updatedAdmin = await Admin.findByIdAndUpdate(id, request.body);
        if(!updatedAdmin){
            return response.status(404).send({message: 'Admin not found.'});
        }
        return response.status(200).send({
            message: 'Admin updated successfully.',
            admin: updatedAdmin
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.delete("/Admin/:id", async (request, response)=>{
    try{
        const {id} = request.params;    
        const deletedAdmin = await Admin.findByIdAndDelete(id);
        if(!deletedAdmin){
            return response.status(404).send({message: 'Admin not found.'});
        }
        return response.status(200).json({
            message: 'Admin deleted successfully.',
            admin: deletedAdmin
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});
export default router;