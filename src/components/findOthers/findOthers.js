import React from 'react';
import s from './findOthers.module.css';

const FindOthers = ({handleShowUser}) => {
    return(
        <div className={s.box} onClick={()=>handleShowUser(true)}>
            <h2 className={s.title}>God생으로 Good생까지</h2>
            <p className={s.paragraph}>다른 사람들의 도전 보러가기</p>
        </div>
    );
}

export default FindOthers;