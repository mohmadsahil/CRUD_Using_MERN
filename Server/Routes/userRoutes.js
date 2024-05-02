import express from "express";
import { create, deleteUser, getAllData, getOne, update } from "../Controllers/userController.js";
const UserRoute = express.Router();

UserRoute.post("/create",create)
UserRoute.get("/getalldata",getAllData)
UserRoute.get("/getone/:id",getOne)
UserRoute.put("/update/:id",update);
UserRoute.delete("/delete/:id",deleteUser);

export default UserRoute;