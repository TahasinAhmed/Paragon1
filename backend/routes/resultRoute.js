import express from "express";
import {Result} from "../models/resultmodel.js";
const router = express.Router();

router.post("/Result/", async (request, response)=>{
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
        const newResult = {
            Title: request.body.Title,
            Description: request.body.Description,
            ImageURL: request.body.ImageURL
        };
        const result = await Result.create(newResult);
        return response.status(201).send(result);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

});

router.get("/Result/", async (request, response)=>{
    try{
        const results = await Result.find();
        return response.status(200).send(results);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get("/Result/:id", async (request, response)=>{
    try{
        const {id} = request.params;
        const result = await Result.findById(id);
        return response.status(200).json(result);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.put("/Result/:id", async (request, response)=>{
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
        const newPublication = {
            Title: request.body.Title,
            Description: request.body.Description,
            ImageURL: request.body.ImageURL
        };
        const publication = await Publication.create(newPublication);
        return response.status(201).send(publication);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

});
router.delete("/Result/:id", async (request, response)=>{
    try{
        const {id} = request.params;    
        const deletedResult = await Result.findByIdAndDelete(id);
        if(!deletedResult){
            return response.status(404).send({message: 'Result not found.'});
        }
        return response.status(200).json({
            message: 'Result deleted successfully.',
            result: deletedResult
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;