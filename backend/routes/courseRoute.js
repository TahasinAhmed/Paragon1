import express from "express";
import {Course} from "../models/coursemodel.js";
const router = express.Router();

router.post("/Course/", async (request, response)=>{
    try{
        if(
            !request.body.Title ||
            !request.body.Description ||
            !request.body.ImageURL
        ){
            return response.status(400).send({
                message: 'Send all required fields.',
            });
        }
        const newCourse = {
            Title: request.body.Title,
            Description: request.body.Description,
            ImageURL: request.body.ImageURL
        };
        const course = await Course.create(newCourse);
        return response.status(201).send(course);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

});

router.get("/Course/", async (request, response)=>{
    try{
        const courses = await Course.find();
        return response.status(200).send(courses);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get("/Course/:id", async (request, response)=>{
    try{
        const {id} = request.params;
        const course = await Course.findById(id);
        return response.status(200).json(course);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.put("/Course/:id", async (request, response)=>{
    try{
        if(
            !request.body.Title ||
            !request.body.Description ||
            !request.body.ImageURL
        ){
            return response.status(400).send({
                message: 'Send all required fields.',
            });
        }
        const {id} = request.params;
        const updatedCourse = await Course.findByIdAndUpdate(id, request.body);
        if(!updatedCourse){
            return response.status(404).send({message: 'Course not found.'});
        }
        return response.status(200).send({
            message: 'Course updated successfully.',
            course: updatedCourse
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.delete("/Course/:id", async (request, response)=>{
    try{
        const {id} = request.params;    
        const deletedCourse = await Course.findByIdAndDelete(id);
        if(!deletedCourse){
            return response.status(404).send({message: 'Course not found.'});
        }
        return response.status(200).json({
            message: 'Course deleted successfully.',
            course: deletedCourse
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});
export default router;