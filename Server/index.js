import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./DB/connection.js";    //DB Connection
import UserRoute from "./Routes/userRoutes.js";

const app  = express();
app.use(express.json());    //to Read the Json Data
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Listening on Port: ${PORT}`)
})

app.use("/api",UserRoute);
