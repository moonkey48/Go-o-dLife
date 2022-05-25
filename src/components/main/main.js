import React,{useState,useEffect} from 'react';
import AchieveRate from '../achieveRate/achieveRate';
import FindOthers from '../findOthers/findOthers';
import Header from '../header/header';
import MidTest from '../midTest/midTest';
import Quote from '../quote/quote';
import ToDoList from '../toDoList/toDoList';
import Weather from '../weather/weather';
import s from './main.module.css';
import { useNavigate,useLocation } from 'react-router-dom';

const Main = ({setUsers, authService, users, database, handleChange}) => {
    const navigate = useNavigate();
    const { state } = useLocation(); 
    const [userId, setUserId] = useState();

    useEffect(()=>{
        authService.onAuthChange(user => {
            if (user) {
                console.log(user.uid);
                setUserId(user.uid);
            } else {
                navigate('/')
            }
        });
    },[navigate, authService, userId]); 
    const onLogout = () =>{
        authService.logout();
    }
    useEffect(()=>{
        console.log(state.uid);
        console.log(users);
        setUserId(state.uid);
    },[]);

    useEffect(()=>{
        if (!userId) {
            return;
        }
        const stopSync = database.readData(userId, user => {
            setUsers({...users,userId:user});
        });
        return stopSync();
    },[database, userId]);


    const handleListChange = (list) =>{
        let updated = {...users[userId]};
        if(list){
            updated.toDoList = [...list];
        }else{
            updated.toDoList = [];
        }
        console.log(updated);
        handleChange(userId, updated);
    }
    return(
        <div className={s.container}>
            <div className={s.main}>
                <Header users={users} userId={userId} handleLogout={onLogout}/>
                <div className={s.content}>
                    <div className={s.leftSection}>
                        <MidTest users={users} userId={userId}/>
                        <FindOthers />
                        <Quote />
                    </div>
                    <ToDoList users={users} userId={userId} handleListChange={handleListChange}/>
                    <div className={s.rightSection}>
                        <Weather/>
                        <AchieveRate />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;