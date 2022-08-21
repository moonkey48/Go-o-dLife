import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../modules/user/user';
import s from './header.module.css'


const Header = ({authService}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = useSelector(state=>state.authReducer);
    
    const handleLogout = () =>{
        dispatch(logoutUser());
        authService.logout();
    }
    const handleEdit = () =>{
        navigate('/edit');
    }
    

    return(
        <header className={s.header}>
            <h2 className={s.titleMid}>
            {user.nickname}님의 갓생을 응원합니다. <br/>
            오늘은 
            “{user.purpose}” <br/>
            도전 {user.day}일차입니다.
            </h2>
            <div className={s.profile}>
                <h2 className={s.titleSmall}>{user.nickname}</h2>
                <img className={s.profileImg} src='/images/profile.png' alt='profile'></img>
                <button className={s.logoutBtn} onClick={()=>handleLogout()}>logout</button>
                <button className={s.logoutBtn} onClick={handleEdit}>Edit Project</button>
            </div>
            
        </header>
    );
}

export default Header;