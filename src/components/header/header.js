import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import s from './header.module.css'

const Header = ({handleLogout, users, userId}) => {
    const navigate = useNavigate();
   
    const handleEdit = () =>{
        navigate('/edit',
        { state: 
            {uid:userId}
        }
        );
    }

    return(
        <header className={s.header}>
            <h2 className={s.titleMid}>
            {users[userId]?.nickname}님의 갓생을 응원합니다. <br/>
            오늘은 
            “{users[userId]?.purpose}” <br/>
            도전 {users[userId]?.day}일차입니다.
            </h2>
            <div className={s.profile}>
                <h2 className={s.titleSmall}>{users[userId]?.nickname}</h2>
                <img className={s.profileImg} src='/images/profile.png' alt='profile'></img>
                <button className={s.logoutBtn} onClick={()=>handleLogout()}>logout</button>
                <button className={s.logoutBtn} onClick={handleEdit}>Edit Project</button>
            </div>
            
        </header>
    );
}

export default Header;