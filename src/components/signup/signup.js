import React,{useRef} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import s from './signup.module.css';

const Signup = ({setNewUser}) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const formRef = useRef();
    const purposeRef = useRef();
    const dayRef = useRef();
    const testRef = useRef();
    const testDayRef = useRef();

    // 'uid3': {
    //     uid: 'uid3',
    //     nickname: 'key',
    //     email: 'gogo4905@gmail.com',
    //     purpose: 'get level2 grade',
    //     test: '1시간동안 문제 5개 풀기',
    //     toDoList: ['somethingTodo1','somethingTodo2','somethingTodo3','somethingTodo4'],
    //     testDay: 10,
    //     day: 3
    //   },
    
    const handleSign = () =>{
        const new_user ={
            uid: state.uid,
            nickname: state.name,
            email: state.email,
            purpose: purposeRef.current.value,
            test: testRef.current.value,
            toDoList: [],
            day: dayRef.current.value,
            testDay: testDayRef.current.value,
        }
        setNewUser(new_user);
        navigate('/main',{state:{ uid: state.uid}});
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
                    <input ref={testRef} className={s.input} type='text' placeholder='목표 기간' ></input>
                    <div className={s.titleSmall}>몇일 뒤에 중간 테스트를 볼까요?</div>
                    <input ref={testDayRef} className={s.input} type='text' placeholder='숫자만 입력해주세요.' ></input>
                </form>
                <button className={s.btn} onClick={()=>handleSign()} >시작하기</button>
            </div>
        </div>
        </>
    );
}

export default Signup;