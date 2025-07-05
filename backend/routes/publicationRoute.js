import express from "express";
import {Publication} from "../models/publicationmodel.js";
const router = express.Router();

router.post("/Publication/", async (request, response)=>{
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

router.get("/Publication/", async (request, response)=>{
    try{
        const publications = await Publication.find();
        return response.status(200).send(publications);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get("/:id", async (request, response)=>{
    try{
        const {id} = request.params;
        const publication = await Publication.findById(id);
        return response.status(200).json(publication);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.put("/Publication/:id", async (request, response)=>{
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
        const updatedPublication = await Publication.findByIdAndUpdate(id, request.body);
        if(!updatedPublication){
            return response.status(404).send({message: 'Publication not found.'});
        }
        return response.status(200).send({
            message: 'Publication updated successfully.',
            publication: updatedPublication
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.delete("/Publication/:id", async (request, response)=>{
    try{
        const {id} = request.params;    
        const deletedPublication = await Publication.findByIdAndDelete(id);
        if(!deletedPublication){
            return response.status(404).send({message: 'Publication not found.'});
        }
        return response.status(200).json({
            message: 'Publication deleted successfully.',
            publication: deletedPublication
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;