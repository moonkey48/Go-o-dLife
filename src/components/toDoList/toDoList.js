import React, {useState,useEffect} from 'react';
import s from './toDoList.module.css';

const ToDoList = ({users, userId}) => {
    const [list, setList] = useState([]);
    useEffect(()=>{
        const list = users[userId].ToDoList;
        setList(list);
    },[]);
    return(
        <div className={s.box}>
            <h1 className={s.title}>To Do List</h1>
            <ul className={s.list}>
                {list.map(item=>{
                    return  <li className={s.listItem}>
                    <div className={s.checkBox}>

                    </div>
                    <div className={s.itemBox}>
                        {item}
                    </div>
                </li>
                })}
            </ul>
        </div>
    );  
}

export default ToDoList;