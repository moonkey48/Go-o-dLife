import React,{useRef,useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './edit-project.module.css';

const EditProject = ({editUser,handleDelete}) => {
    const navigate = useNavigate();
    const [alertText, setAlertText] = useState('');
    const user = useSelector(data=>data.authReducer);
    const [purpose,setPurpos] = useState(user.purpose || '');
    const [day, setDay] = useState(user.day || 0);
    const [testDay, setTestDay] = useState(user.testDay || 0);
    const [test, setTest] = useState(user.test || '');
    

    const checkType = () =>{
        if(purpose===''||test===''||testDay===''||day===''){
            setAlertText('모든 칸을 입력해주세요.');
            return false;
        }else if(isNaN(day)){
            setAlertText('목표 기간에 숫자만 입력해주세요.');
            return false;
        }else if(isNaN(testDay)){
            setAlertText('테스트 목표 기간에 숫자만 입력해주세요.');
            return false;
        }
        return true;
    }
    
    const handleEdit = () =>{
        const typeResult = checkType();
        if(typeResult){
            const new_user ={
                uid: user.uid,
                nickname: user.nickname,
                email: user.email,
                purpose: purpose,
                test: test,
                toDoList: [...user.toDoList],
                day: day,
                testDay: testDay,
            }
            editUser(user.uid, new_user);
            navigate('/main');
        }
    }

    const onDelete = (uid) =>{
        handleDelete(uid);
        navigate('/');
    }
    return(
        <div className={s.container}>

            <div className={s.signBox}>
                <h2 className={s.title}>안녕하세요 {user.name}. <br/> 갓생을 위해 아래 목표를 설정해주세요.</h2> 
                <form className={s.form}>
                    <div className={s.titleSmall}>원하는 목표를 입력해주세요.</div>
                    <input className={s.input} type='text' value={purpose} onChange={(e)=>setPurpos(e.currentTarget.value)} ></input>
                    <div className={s.titleSmall}>몇일동안 목표를 달성하고 싶으신가요?</div>
                    <input className={s.input} type='text' value={day} onChange={(e)=>setDay(e.currentTarget.value)}  placeholder='숫자만 입력해주세요.' ></input>
                    <div className={s.titleSmall}>중간 점검 목표를 설정해주세요.</div>
                    <input className={s.input} type='text' value={test} onChange={(e)=>setTest(e.currentTarget.value)} placeholder='중간 테스트 목표' ></input>
                    <div className={s.titleSmall}>몇일 뒤에 중간 테스트를 볼까요?</div>
                    <input className={s.input} type='text' value={testDay} onChange={(e)=>setTestDay(e.currentTarget.value)}  placeholder='숫자만 입력해주세요.' ></input>
                </form>
                <div className={s.alert}>{alertText}</div>
                <div className={s.btnBox}>
                    <button className={s.deleteBtn} onClick={()=>onDelete()} >프로젝트 삭제하기</button>
                    <button className={s.btn} onClick={()=>handleEdit()} >수정 완료</button>
                </div>
            </div>
        </div>
    );
}

export default EditProject;