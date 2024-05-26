import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { User } from './Components/getUser/User';
import { AddUser } from './Components/addUser/AddUser';
import { Edit } from './Components/updateUser/Edit';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<User/>}/>
            <Route path='/add' element={<AddUser/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/delete' element="Delete User Details Page"/>
        </Routes>
        <Toaster/>
    </BrowserRouter>
    </>
  )
}

export default App
