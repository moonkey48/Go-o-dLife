import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import s from './login.module.css';

const Login = ({authService,users}) => {
    const navigate = useNavigate();

    const goToMain = (user) =>{
        console.log(user);
        navigate('/main', 
            { state: 
                {uid:user.uid}
            }
        );
    }
    const goToSignup = (user) =>{
        console.log(user);
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
                    console.log('already user');
                    goToMain(result.user);
                }else{
                    console.log('new user');
                    goToSignup(result.user);
                }
                console.log(result.user.uid);
            });
    }   
    const handleInfo = (e) =>{
        e.preventDefault();
        console.log(users);
    }
    
    return(
        <div className={s.container}>
            <div className={s.loginBox}>
                <h2 className={s.title}>갓생프로젝트에 오신 것을 환영합니다.</h2> 
                <button onClick={handleLogin} className={`${s.btn} ${s.login}`}>구글 로그인</button>
                <button onClick={handleInfo} className={`${s.btn} ${s.login}`}>유저 정보 가져오기</button>
            </div>
        </div>
    );
}

export default Login;