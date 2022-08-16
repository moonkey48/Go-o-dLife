import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/signup';
import EditProject from './components/edit-project/edit-project';
import LoginContainer from './pages/login/LoginContainer';
import MainContainer from './pages/main/MainContainer';
import OtherProjects from './pages/otherProjects/OtherProjects';


const App = ({authService,database,quote,weather,youtube}) =>{

  const [users, setUsers] = useState({});

  useEffect(()=>{
    database.readAllData((value)=>{setUsers(value)});
  });

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
        <Route path='/' element={<LoginContainer users={users} authService={authService}/>} />
        <Route path='/main' element={<MainContainer handleChange={createOrUpdate} setUsers={setUsers} database={database} users={users} authService={authService} quote={quote} weather={weather} youtube={youtube}/>}/>
        <Route path='/signup' element={<Signup handleNewUser={createOrUpdate} database={database}  authService={authService} />}/>
        <Route path='/edit' element={<EditProject handleDelete={onDelete} users={users} editUser={createOrUpdate}/>}/>
        <Route path='/otherProjects' element={<OtherProjects users={users} authService={authService} />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
