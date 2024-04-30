import {User} from "../Models/userModels.js"

export const create = async(req,res)=>{
    const {fname,lname,email,password} = req.body;

    try {
            const userData = new User({fname:fname,lname:lname,email:email,password:password})
            const savedData =  await userData.save();   // Data will save into DB

            return res.status(200).json(savedData)

    } catch (error) {
            res.status(500).json({error : error});
    }

}