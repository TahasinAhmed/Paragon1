import express, { request, response } from  "express"
import {mongoDBURL, PORT} from "./config.js"
import mongoose from 'mongoose'
import {User} from './models/usermodel.js'

const app = express()

const app = express();
app.use(express.json());

app.get('/', (request, response) =>{
    console.log(request);
    return response.status(234).send("Welcome to Paragon");
});

app.post("/users", async (request, response)=>{
    try{
        if(
            !request.body.BranchName ||
            !request.body.RollNo ||
            !request.body.BatchNo ||
            !request.body.EnglishName ||
            !request.body.BanglaName ||
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
            BranchName: request.body.BranchName,
            RollNo: request.body.RollNo,
            BatchNo: request.body.BatchNo,
            EnglishName: request.body.EnglishName,
            BanglaName: request.body.BanglaName,
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


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App connected to database");
        app.listen(PORT, () => {
        console.log('App is listening to port: ' + PORT);
        });
    })
    .catch((error)=>{
        console.log(error);
    });
