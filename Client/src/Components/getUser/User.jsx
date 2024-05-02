import React, { useEffect, useState } from 'react';
import "./User.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

export const User = () => {

    const[users,setUsers] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
           const resposne = await axios.get("http://localhost:8000/api/getalldata");
           setUsers(resposne.data);
        }
        fetchData();
    },[])

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
                                <td>{user.fname}{user.lname}</td>
                                <td>{user.email}</td>
                                <td>
                                    <a className='actionButton' href={"/edit"}>Delete</a>
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
