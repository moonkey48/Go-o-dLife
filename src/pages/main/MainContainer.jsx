import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Main from './Main';

const MainContainer = ({authService, handleChange,quote,weather,youtube}) => {
    const navigate = useNavigate(); 
    const user = useSelector(state=>state.authReducer);

    useEffect(()=>{
        if(user.uid===''){
            navigate('/')
        }
    },[user,navigate]);
    
    useEffect(()=>{
        authService.onAuthChange(user => {
            if (!user) {
                navigate('/')
            }
        });
    },[navigate, authService,user]); 

    const handleListChange = (list) =>{
        let updated = {...user};
        if(list){
            updated.toDoList = [...list];
        }else{
            updated.toDoList = [];
        }
        handleChange(user.uid, updated);
    }
 
    
    return <Main 
        quote={quote} 
        handleListChange={handleListChange} 
        weather={weather} 
        youtube={youtube}
        authService={authService}
         />
}

export default MainContainer;