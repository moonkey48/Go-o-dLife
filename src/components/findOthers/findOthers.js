import React from 'react';
import { Link } from 'react-router-dom';
import s from './findOthers.module.css';

const FindOthers = ({userId}) => {
    return(
        <Link to={'/otherProjects'} state={{userId}}>
            <div className={s.box}>
                <h2 className={s.title}>God생으로 Good생까지</h2>
                <p className={s.paragraph}>다른 사람들의 도전 보러가기</p>
            </div>
        </Link>
    );
}

export default FindOthers;