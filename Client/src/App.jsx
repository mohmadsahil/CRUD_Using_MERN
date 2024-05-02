import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { User } from './Components/getUser/User';
import { AddUser } from './Components/addUser/AddUser';
import { Edit } from './Components/updateUser/Edit';

function App() {


  const route = createBrowserRouter([
    {
        path:"/",
        element:<User/>
    },
    {
      path:"/add",
      element:<AddUser/>
    },
    {
      path:"/edit/:id",
      element:<Edit/>
    },
    {
      path:"/delete",
      element:"Delete User Details Page"
    }
  ])

  return (
    <>
      <RouterProvider router={route}></RouterProvider>    
    </>
  )
}

export default App
