import axios from 'axios';
import React, {useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'
    
export const Edit = () => {

    const users = {
        fname:"",
        lname:"",
        email:"",
      }

    const {id} = useParams();
    const[user,setUser] = useState(users);
    const navigate = useNavigate();

      const inputChangeHandler = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
        console.log(user);
      }

      useEffect(()=>{
        const fetchData = ()=>{
          try {
            const response = fetch(`http://localhost:8000/api/getone/${id}`)
            .then((data)=>{
               return data.json();
            })
            .then((res)=>{
              setUser(res);
            })
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }

        fetchData();

      },[id])


      const submitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/${id}`,user)
        .then((response)=>{
            toast.success("User Has Been Updated Successfully");
            navigate("/");      //to navigate the Diffrent route after success
        })
        .catch(error => console.log(error));
    
        // const fetchdata = fetch(`http://localhost:8000/api/update/{id}`,{
        //   method:"PUT",
        //   headers:{
        //     "Content-Type":"application/json"
        //   },
        //   body: JSON.stringify({fname:user.fname, lname:user.lname, email:user.email})
        // }).then((res)=>{
        //         console.log(res);
        //         toast.success("User Data Has Been Updated");
        //         navigate("/"); 
        // })
      }

      
  

  return (
    <div>
        <div className='AddUser'>
        <a href={"/"} className='addButton'>Back</a>
        <h1>Update The User Details!</h1>

        <form className='addUserFrom' onSubmit={submitForm}>
            <div className='inputGroup'>
                <label htmlFor="fname">First Name</label>
                <input type="text" value={user.fname} onChange={inputChangeHandler} name='fname' id='fname'/>
            </div>

            <div className='inputGroup'>
                <label htmlFor="lname">Last Name</label>
                <input type="text" value={user.lname} onChange={inputChangeHandler} name='lname' id='lname'/>
            </div>

            <div className='inputGroup'>
                <label htmlFor="email">Email</label>
                <input type="text" value={user.email} onChange={inputChangeHandler} name='email' id='email'/>
            </div>
            
            <button type='submit' className='addButton'>Update</button>
        </form>
        </div>
    </div>
  )
}
