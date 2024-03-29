import React, {useState,useEffect,useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../modules/user/user';
import s from './toDoList.module.css';

const ToDoList = ({handleListChange}) => {
    const user = useSelector(state=>state.authReducer)
    const dispatch = useDispatch();
    const formRef = useRef();
    const addRef = useRef();
    const [list, setList] = useState([]);

    useEffect(()=>{
        setList([...user.toDoList])
    },[user.toDoList])

    const changeEvent = (updated) =>{
        dispatch(updateUser({...user,toDoList:updated}))
        handleListChange(updated);
    }

    const handleAdd = (e) =>{
        e.preventDefault();
        const newItem = addRef.current.value; 
        const updated = [...list,[newItem,false]];
        setList(updated);
        formRef.current.reset();
        changeEvent(updated)
    }
    const toggleCheck = (index) =>{
        const updated = [...list]
        updated[index][1] = updated[index][1]?false:true;
        setList(updated);
        changeEvent(updated)
    }
    const deleteItem = (index) =>{
        const updated = [...list.slice(0,index),...list.slice(index + 1)];
        setList(updated);
        changeEvent(updated)
    }
    return(
        <div className={s.box}>
            <h1 className={s.title}>To Do List</h1>
            <ul className={s.list}>
                {   list.map((item,index)=>{
                        return  <li key={index} className={s.listItem}>
                        {item[1] === true?
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={s.checked} onClick={()=>toggleCheck(index)} d="M3 6.5L8 11.5L17 2.5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            :
                            <div className={s.checkBox} onClick={()=>toggleCheck(index)}/>
                            }
                            <div className={s.itemBox}>
                                {item[0]}
                            </div>
                            <svg onClick={()=>deleteItem(index)} className={s.delete} width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={s.deleteBtn} d="M1 11L11 1"  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className={s.deleteBtn} d="M1 1L11 11"  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </li>
                    })
                }
                <li className={s.listItem}>
                    <form ref={formRef} className={s.form} onSubmit={(e)=>handleAdd(e)}>
                        <button className={s.btn}>+</button>
                        <input ref={addRef} className={s.input} type='text' placeholder='할일을 추가해주세요.' />
                    </form>
                </li>
            </ul>
        </div>
    );  
}

export default ToDoList;