import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';


const LoginContainer = ({authService,users}) => {
    const navigate = useNavigate();

    const goToMain = (user) =>{
        navigate('/main', 
            { state: 
                {uid:user.uid}
            }
        );
    }
    const goToSignup = (user) =>{
        navigate('/signup', 
            { state: 
                {uid:user.uid, email:user.email, name:user.displayName}
            }
        );
    }
    const handleLogin = () =>{
        authService
            .login()
            .then(result => {
                if(users[result.user.uid]){
                    goToMain(result.user);
                }else{
                    goToSignup(result.user);
                }
            });
    }   
    return <Login handleLogin={handleLogin} />
}

export default LoginContainer;