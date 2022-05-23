import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import s from './login.module.css';

const Login = ({authService,users,setNewUser}) => {
    const navigate = useNavigate();
    const goToMain = (userId) =>{
        navigate({
            pathname: '/main',
            state: { id: userId },
        })
    }
    const goToSignup = (user) =>{
        navigate('/signup', { state: {uid:user.uid, email:user.email, name:user.displayName}});
    }
    const handleLogin = () =>{
        authService
            .login()
            .then(result => {
                console.log(result);
                console.log(users[result.user.uid]);
                if(users[result.user.uid]===undefined){
                    console.log('new user');
                    goToSignup(result.user);
                }else{
                    console.log('already user');
                    goToMain(result.user.uid);
                }
            });
    }   
    
    return(
        <div className={s.container}>
            <div className={s.loginBox}>
                <h2 className={s.title}>갓생프로젝트에 오신 것을 환영합니다.</h2> 
                <button onClick={handleLogin} className={`${s.btn} ${s.login}`}>구글 로그인</button>
            </div>
        </div>
    );
}

export default Login;