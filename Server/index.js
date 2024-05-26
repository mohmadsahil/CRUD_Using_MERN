import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import "./DB/connection.js";    //DB Connection
import UserRoute from "./Routes/userRoutes.js";
import path from "path";


const app  = express();

const PORT = 8080;

app.use(express.json());    //to Read the Json Data

//Runnig this App on Single Port

const _dirname=path.dirname("")
const buildpath = path.join(_dirname,"../Client/dist")
app.use(express.static(buildpath));

app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET","POST","PUT", "DELETE", "PATCH"],  
}));

app.use(UserRoute);


app.listen(PORT,()=>{
    console.log(`Listening on Port: ${PORT}`)
})

