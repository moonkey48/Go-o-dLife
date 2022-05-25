import React,{useRef,useState,useEffect} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import s from './edit-project.module.css';

const EditProject = ({users,editUser,handleDelete}) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [alertText, setAlertText] = useState('');
    const formRef = useRef();
    const purposeRef = useRef();
    const dayRef = useRef();
    const testRef = useRef();
    const testDayRef = useRef();

    useEffect(()=>{
        console.log(state.uid);
        console.log(users[state.uid]);
    },[]);

    const checkType = () =>{
        const isNumDay = dayRef.current.value;
        const isNumTest = testDayRef.current.value;
        const isPurpose = purposeRef.current.value;
        const isTest = testRef.current.value;
        
        if(isNumDay===''||isNumTest===''||isPurpose===''||isTest===''){
            setAlertText('모든 칸을 입력해주세요.');
            return false;
        }else if(isNaN(isNumDay)){
            setAlertText('목표 기간에 숫자만 입력해주세요.');
            return false;
        }else if(isNaN(isNumTest)){
            setAlertText('테스트 목표 기간에 숫자만 입력해주세요.');
            return false;
        }
        return true;
    }
    
    const handleEdit = () =>{
        const typeResult = checkType();
        if(typeResult){
            const user = users[state.uid];
            const new_user ={
                uid: user.uid,
                nickname: user.nickname,
                email: user.email,
                purpose: purposeRef.current.value,
                test: testRef.current.value,
                toDoList: [...user.toDoList],
                day: dayRef.current.value,
                testDay: testDayRef.current.value,
            }
            editUser(state.uid, new_user);
            navigate('/main',{state: {uid: state.uid}});
        }
    }

    const onDelete = (uid) =>{
        handleDelete(uid);
        navigate('/');
    }
    return(
        <div className={s.container}>

            <div className={s.signBox}>
                <h2 className={s.title}>안녕하세요 {state.name}. <br/> 갓생을 위해 아래 목표를 설정해주세요.</h2> 
                <form ref={formRef} className={s.form}>
                    <div className={s.titleSmall}>원하는 목표를 입력해주세요.</div>
                    <input ref={purposeRef} className={s.input} type='text' placeholder='목표' ></input>
                    <div className={s.titleSmall}>몇일동안 목표를 달성하고 싶으신가요?</div>
                    <input ref={dayRef} className={s.input} type='text' placeholder='숫자만 입력해주세요.' ></input>
                    <div className={s.titleSmall}>중간 점검 목표를 설정해주세요.</div>
                    <input ref={testRef} className={s.input} type='text' placeholder='중간 테스트 목표' ></input>
                    <div className={s.titleSmall}>몇일 뒤에 중간 테스트를 볼까요?</div>
                    <input ref={testDayRef} className={s.input} type='text' placeholder='숫자만 입력해주세요.' ></input>
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