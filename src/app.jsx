import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Login from './components/login/login';
import Signup from './components/signup/signup';


const App = ({authService,database}) =>{

  const [users, setUsers] = useState({});

  useEffect(()=>{
    database.readAllData((value)=>{setUsers(value)});
  },[]);
  useEffect(()=>{
    console.log(users);
  },[users]);

  const setNewUser = new_user =>{
     let updated = {...users};
     updated[new_user.uid] = new_user;
     setUsers(updated);
     console.log(updated);

  }

  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login database={database} users={users} authService={authService}/>} />
        <Route path='/main' element={<Main setUsers={setUsers} database={database} users={users} authService={authService} />}/>
        <Route path='/signup' element={<Signup database={database} setNewUser={setNewUser}  authService={authService} />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
