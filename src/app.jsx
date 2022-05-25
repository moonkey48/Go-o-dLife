import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import EditProject from './components/edit-project/edit-project';


const App = ({authService,database,quote}) =>{

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
  const onDelete = (uid) =>{
    database.deleteData(uid);
  }

  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} authService={authService}/>} />
        <Route path='/main' element={<Main handleChange={createOrUpdate} setUsers={setUsers} database={database} users={users} authService={authService} quote={quote} />}/>
        <Route path='/signup' element={<Signup handleNewUser={createOrUpdate} database={database}  authService={authService} />}/>
        <Route path='/edit' element={<EditProject handleDelete={onDelete} users={users} editUser={createOrUpdate}/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
