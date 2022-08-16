import React from 'react';
import s from './login.module.css';

const Login = ({handleLogin}) => {
    return(
        <>
            <h2 className={s.intro}>Energy and Persistence conquer all thinns.</h2> 
            <div className={s.container}>
                <div className={s.loginBox}>
                    <h2 className={s.title}>갓생프로젝트에 오신 것을 환영합니다.</h2> 
                    <button onClick={handleLogin} className={`${s.btn} ${s.login}`}>구글 로그인</button>
                </div>
            </div>
        </>
    )

}

export default Login;