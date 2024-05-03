import React, { useEffect, useState } from 'react';
import "./User.css";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export const User = () => {

    const[users,setUsers] = useState([]);
    const {id} = useParams;

    useEffect(()=>{
        const fetchData = async ()=>{
           const resposne = await axios.get("http://localhost:8000/api/getalldata");
           setUsers(resposne.data);
        }
        fetchData();
    },[])

    const deleteUser = async(userId)=>{
        await axios.delete(`http://localhost:8000/api/delete/${userId}`)
        .then((resposne)=>{
            setUsers((prevUser)=>prevUser.filter((user)=>user._id != userId))
            toast.success("User Data Has Been Deleted")
        })
    }

  return (
    <div className='userTable'>
        <a href={"/add"} className='addButton'>Add User</a>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <tr>
                <th>S.No</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Actions</th>
            </tr>
            <tbody>
                {
                    users.map((user,index)=>{
                        return(
                            <tr key={user._id}>
                                <td>{index+1}</td>
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td>
                                    <a className='actionButton' onClick={()=>deleteUser(user._id)}>Delete</a>
                                    <Link to={`/edit/`+ user._id} className='actionButton'>Edit</Link>
                                </td>
                            </tr>
                        )
                        
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
