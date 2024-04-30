import express from "express";
import { create } from "../Controllers/userController.js";
const UserRoute = express.Router();

UserRoute.post("/create",create)

export default UserRoute;