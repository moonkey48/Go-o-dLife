import React,{useEffect} from 'react';
import s from './other-project.module.css';

const OtherProject = ({users,handleShowUser}) => {
    return(
        <>
        <button className={s.btn} onClick={()=>handleShowUser(false)}>돌아가기</button>
        <div className={s.content}>
        <ul className={s.list}>
                {
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

export default OtherProject;