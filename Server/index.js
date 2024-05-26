import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import "./DB/connection.js";    //DB Connection
import UserRoute from "./Routes/userRoutes.js";

const app  = express();

app.use(express.json());    //to Read the Json Data

app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET","POST","PUT", "DELETE", "PATCH"],  
}));

app.use(UserRoute);

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Listening on Port: ${PORT}`)
})

