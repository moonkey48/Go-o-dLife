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

  const createOrUpdate = (userId, user)=>{
    let updated = {...users};
     updated[userId] = user;
     setUsers(updated);
     database.saveDatabase(userId, user);
  }

  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} authService={authService}/>} />
        <Route path='/main' element={<Main handleChange={createOrUpdate} setUsers={setUsers} database={database} users={users} authService={authService} />}/>
        <Route path='/signup' element={<Signup handleNewUser={createOrUpdate} database={database}  authService={authService} />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
