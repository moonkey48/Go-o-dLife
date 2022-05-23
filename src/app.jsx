import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Login from './components/login/login';
import Signup from './components/signup/signup';


const App = ({authService}) =>{

  const [users, setUsers] = useState({
    'uid1': {
      uid: 'uid1',
      nickname: 'austin',
      email: 'gogo4905@gmail.com',
      purpose: 'get level2 grade',
      test: '3시간동안 문제 2개 풀기',
      toDoList: [['somethingTodo1',false],['somethingTodo2',false],['somethingTodo3',false],['somethingTodo4',false]],
      testDay: 10,
      day: 1
    },
    'uid2': {
      uid: 'uid2',
      nickname: 'moon',
      email: 'gogo4905@gmail.com',
      purpose: 'get level5 grade',
      test: '2시간동안 문제 10개 풀기',
      toDoList: [['somethingTodo1',false],['somethingTodo2',false],['somethingTodo3',false],['somethingTodo4',false]],
      testDay: 10,
      day: 2
    },
    'uid3': {
      uid: 'uid3',
      nickname: 'key',
      email: 'gogo4905@gmail.com',
      purpose: 'get level2 grade',
      test: '1시간동안 문제 5개 풀기',
      toDoList: [['somethingTodo1',false],['somethingTodo2',false],['somethingTodo3',false],['somethingTodo4',false]],
      testDay: 10,
      day: 3
    },
  });
  const setNewUser = new_user =>{
     let updated = {...users};
     updated[new_user.uid] = new_user;
     setUsers(updated);
     console.log(updated);
  }

  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} authService={authService}/>} />
        <Route path='/main' element={<Main users={users} authService={authService} />}/>
        <Route path='/signup' element={<Signup setNewUser={setNewUser}  authService={authService} />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
