import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
    
export const Edit = () => {

    const users = {
        fname:"",
        lname:"",
        email:"",
      }

    const {id} = useParams();
    const[user,setUser] = useState(users);

      const inputChangeHandler = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
        console.log(user);
      }

      useEffect(()=>{
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
      },[id])
    
  return (
    <div>
        <div className='AddUser'>
        <a href={"/"} className='addButton'>Back</a>
        <h1>Update The User Details!</h1>

        <form className='addUserFrom'>
            <div className='inputGroup'>
                <label htmlFor="fname">First Name</label>
                <input type="text" onChange={inputChangeHandler} name='fname' id='fname'/>
            </div>

            <div className='inputGroup'>
                <label htmlFor="lname">Last Name</label>
                <input type="text" onChange={inputChangeHandler} name='lname' id='lname'/>
            </div>

            <div className='inputGroup'>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={inputChangeHandler} name='email' id='email'/>
            </div>
            
        </form>
            <button type='submit' className='addButton'>Update</button>
        </div>
    </div>
  )
}
