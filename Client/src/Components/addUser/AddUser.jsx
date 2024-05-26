import React, { useState } from 'react'
import "./AddUser.css";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {

  const navigate = useNavigate();


  const users = {
    fname:"",
    lname:"",
    email:"",
  }


  const [user,setUser] = useState(users);

  const inputHandler = (e)=>{
    const {name , value} = e.target;
    setUser({...user, [name]:value});
  }

  const submitForm = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/create",user)
    .then((response)=>{
        toast.success("New User has Been Added");
        navigate("/");      //to navigate the Diffrent route after success
    })
    .catch(error => console.log(error));

    // const fetchdata = fetch("http://localhost:8000/create",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify({fname:user.fname, lname:user.lname, email:user.email, password:user.password})
    // }).then((res)=>{
    //         toast.success("New User has Been Added");
    //         navigate("/"); 
    // })
    // fetchdata();
  }



  return (
    <div className='AddUser'>
      <a href={"/"} className='addButton'>Back</a>
      <h1>Add New User Here!</h1>

      <form className='addUserFrom' onSubmit={submitForm}>
        <div className='inputGroup'>
              <label htmlFor="fname">First Name</label>
              <input type="text" onChange={inputHandler} name='fname' id='fname'/>
        </div>

        <div className='inputGroup'>
              <label htmlFor="lname">Last Name</label>
              <input type="text" onChange={inputHandler} name='lname' id='lname'/>
        </div>

        <div className='inputGroup'>
              <label htmlFor="email">Email</label>
              <input type="text" onChange={inputHandler} name='email' id='email'/>
        </div>

        <div className='inputGroup'>
              <label htmlFor="password">Password</label>
              <input type="password" onChange={inputHandler} name='password' id='password'/>
        </div>

        <button type='submit' className='addButton'>Add User</button>

      </form>

    </div>
  )
}


