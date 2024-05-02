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

// ****************GET THE DATA FROM DATABASE****************

export const getAllData = async(req,res)=>{
    try {
        const userData = await User.find(); //find the Data from database
        if(!userData){
           return res.status(404).json({msg:"User Data Not Available"});
        }
        res.status(200).json(userData);
        
    } catch (error) {
        res.status(500).json({error : error});
    }
}


// *********************GET PARTICAL DATA FROM DB***************


export const getOne = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){ 
            res.status(404).json({msg:"User Does Not Exist"})
        }
        return res.status(500).json(userExist)

    } catch (error) {
        res.status(500).json({error:error});
    }
}

// ********************UPDATE THE EXISTING DATA***************

export const update = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User Does Not Exist"})
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});   // {new:true} it Will Return the Updated Data
        return res.status(200).json(updatedData);
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}


// *********************DELETE THE DATA ***********************

export const deleteUser = async(req,res)=>{
    try {

        const id = req.params.id;
        const userExist =await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User Does Not Exist"});
        }
        
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User Deleted Successfully"});

    } catch (error) {
        res.status(500).json({error: error})
    }
}