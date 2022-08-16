import React, { useEffect, useId, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import * as s from './OtherProjects.module.css'

const OtherProjects = ({users,authService}) => {
    const data = useLocation();
    const [userId,setUserId] = useState(data.state.userId);
    useEffect(()=>{
        console.log(userId)
    },[useId])
    
    return(
    <>
        <Link to='/main'><button className={s.btn}>돌아가기</button></Link>
            <Header  users={users} userId={userId} authService={authService}/>
            <div className={s.content}>
            <ul className={s.list}>
                {
                users &&
                Object.keys(users).map(key=>{
                    return <li className={s.item} key={key}>
                        <h3 className={s.nickname}>{users[key].nickname}</h3>
                        <h2 className={s.purpose}>{users[key].purpose}</h2>
                        <h3 className={s.day}>{users[key].day}일 도전</h3>
                    </li> 
                })
                }
            </ul>
        </div>
    </>
    )
}

export default OtherProjects;