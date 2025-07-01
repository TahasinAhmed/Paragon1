import express, { request, response } from  "express"
import {mongoDBURL, PORT} from "./config.js"
import mongoose from 'mongoose'
import {User} from './models/usermodel.js'
import userRoute from "./routes/userRoute.js"
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(cors());
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
