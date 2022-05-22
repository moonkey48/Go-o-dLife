import React from 'react';
import s from './midTest.module.css';

const MidTest = ({users, userId}) => {
    return(
        <div className={s.box}>
            <div className={s.titleBox}>
                <h2 className={s.title}>중간 테스트</h2>
                <h2 className={s.title}>D-{users[userId].testDay}</h2>
            </div>
            <p className={s.paragraph}>{users[userId].test}</p>
        </div>
    );
}

export default MidTest;