import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {signupUser } from '../../modules/user/user';
import Login from './Login';


const LoginContainer = ({authService,users,readData}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToMain = (uid) =>{
        readData(uid)
        navigate('/main');
    }
    const goToSignup = (user) =>{
        dispatch(signupUser(user.uid, user.email, user.displayName))
        navigate('/signup');
    }
    const handleLogin = () =>{
        authService
            .login()
            .then(result => {
                if(users[result.user.uid]){
                    goToMain(result.user.uid);
                }else{
                    goToSignup(result.user);
                }
            });
    }   
    return <Login handleLogin={handleLogin} />
}

export default LoginContainer;