import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURI="mongodb+srv://sahilsid2001:ICdNjyBaSUFCcGZp@cluster.soecgin.mongodb.net/userdata?retryWrites=true&w=majority&appName=Cluster";

export default mongoose.connect(mongoURI)
.then(()=>{
    console.log("CONNECTED TO THE DB")
})
.catch((err)=>{
    console.log("NOT CONNECTED!");
})