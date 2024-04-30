import mongoose from "mongoose";

export default mongoose.connect("mongodb://127.0.0.1:27017/UserData")
.then(()=>{
    console.log("CONNECTED TO THE DB")
})
.catch((err)=>{
    console.log("NOT CONNECTED!");
})