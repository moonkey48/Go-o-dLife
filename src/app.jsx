import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/signup';
import EditProject from './pages/edit/edit-project';
import LoginContainer from './pages/login/LoginContainer';
import MainContainer from './pages/main/MainContainer';
import OtherProjects from './pages/otherProjects/OtherProjects';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, updateUser, logoutUser  } from './modules/user/user';





const App = ({authService,database,quote,weather,youtube}) =>{
  const dispatch = useDispatch();
  const user = useSelector(data=>data.authReducer);
  const [users, setUsers] = useState({});

  useEffect(()=>{
    database.readAllData((value)=>{
      setUsers(value)
      console.log(value)
    });
  },[authService,database,user]);
  

  const createOrUpdate = (userId, user)=>{
     database.saveDatabase(userId, user);
     dispatch(updateUser(user));
  }
  const onDelete = (userId) =>{
    database.deleteData(userId);
    dispatch(logoutUser())
  }
  const readData = (userId) =>{
    dispatch(loginUser(users[userId]))
  }
  
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginContainer users={users} readData={readData} authService={authService}/>} />
          <Route path='/main' element={<MainContainer handleChange={createOrUpdate} database={database} users={users} authService={authService} quote={quote} weather={weather} youtube={youtube}/>}/>
          <Route path='/signup' element={<Signup handleNewUser={createOrUpdate} users={users}/>}/>
          <Route path='/edit' element={<EditProject handleDelete={onDelete} users={users} editUser={createOrUpdate}/>}/>
          <Route path='/otherProjects' element={<OtherProjects users={users} authService={authService} />} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;
