import React,{useState,useEffect} from 'react';
import FindOthers from '../findOthers/findOthers';
import Header from '../header/header';
import MidTest from '../midTest/midTest';
import Quote from '../quote/quote';
import ToDoList from '../toDoList/toDoList';
import Weather from '../weather/weather';
import s from './main.module.css';
import { useNavigate,useLocation } from 'react-router-dom';
import OtherProject from '../other-project/other-project';
import YoutubeVideo from '../youtubeVideo/youtubeVideo';

const Main = ({setUsers, authService, users, database, handleChange,quote,weather,youtube}) => {
    const navigate = useNavigate();
    const { state } = useLocation(); 
    const [userId, setUserId] = useState();
    const [showOthers, setShowOthers] = useState(false);

    useEffect(()=>{
        authService.onAuthChange(user => {
            if (user) {
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
        if (state.uid) {
            setUserId(state.uid);
        }
    },[state.uid]);

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
        handleChange(userId, updated);
    }
    const handleShowUser = (value) =>{
        if(value){
            setShowOthers(true);
        }else{
            setShowOthers(false);
        }
    }
    
    return(
        <div className={s.container}>
            <div className={s.main}>
                <Header users={users} userId={userId} handleLogout={onLogout}/>
                {showOthers?
                    <OtherProject users={users} handleShowUser={handleShowUser} />
                    :
                    <div className={s.content}>
                        <div className={s.leftSection}>
                            <MidTest users={users} userId={userId}/>
                            <FindOthers handleShowUser={handleShowUser}/>
                            <Quote quote={quote}/>
                        </div>
                        <ToDoList users={users} userId={userId} handleListChange={handleListChange}/>
                        <div className={s.rightSection}>
                            <Weather weather={weather}/>
                            <YoutubeVideo youtube={youtube} />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Main;