import React,{useState,useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import Main from './Main';

const MainContainer = ({setUsers, authService, users, database, handleChange,quote,weather,youtube}) => {
    const navigate = useNavigate();
    const { state } = useLocation(); 
    const [userId, setUserId] = useState();

    useEffect(()=>{
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                navigate('/')
            }
        });
    },[navigate, authService, userId]); 
    
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
 
    
    return <Main 
        users={users} 
        userId={userId} 
        quote={quote} 
        handleListChange={handleListChange} 
        weather={weather} 
        youtube={youtube}
        authService={authService}
         />
}

export default MainContainer;