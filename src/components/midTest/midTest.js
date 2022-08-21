import React from 'react';
import { useSelector } from 'react-redux';
import s from './midTest.module.css';

const MidTest = () => {
    const user = useSelector(state=>state.authReducer);
    return(
        <div className={s.box}>
            <div className={s.titleBox}>
                <h2 className={s.title}>중간 테스트</h2>
                <h2 className={s.title}>D-{user.testDay}</h2>
            </div>
            <p className={s.paragraph}>{user.test}</p>
        </div>
    );
}

export default MidTest;