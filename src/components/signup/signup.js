import React,{useRef,useState} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import s from './signup.module.css';

const Signup = ({handleNewUser,database}) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [alertText, setAlertText] = useState('');
    const formRef = useRef();
    const purposeRef = useRef();
    const dayRef = useRef();
    const testRef = useRef();
    const testDayRef = useRef();

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
    
    const handleSign = () =>{
        const typeResult = checkType();
        if(typeResult){
            const new_user ={
                uid: state.uid,
                nickname: state.name,
                email: state.email,
                purpose: purposeRef.current.value,
                test: testRef.current.value,
                toDoList: [['something to do',false]],
                day: dayRef.current.value,
                testDay: testDayRef.current.value,
            }
            handleNewUser(state.uid, new_user);
            navigate('/main',{state: {uid: state.uid}});
        }
    }

    return(
        <>
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
                <button className={s.btn} onClick={()=>handleSign()} >시작하기</button>
            </div>
        </div>
        </>
    );
}

export default Signup;