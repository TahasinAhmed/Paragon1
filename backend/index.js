import express from "express"
import mongoose from 'mongoose'
import userRoute from "./routes/userRoute.js"
import adminRoute from "./routes/adminRoute.js";
import authRoute from "./routes/AuthRouter.js";
import cors from 'cors';
import { config } from 'dotenv';
config();


const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;
const HTTPURL = process.env.HTTPURL;

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.get('/', (request, response) =>{
    console.log(request);
    return response.status(234).send("Welcome to Paragon");
});

app.use('/users', userRoute);
app.use('/admin', adminRoute);
app.use('/auth', authRoute);


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
