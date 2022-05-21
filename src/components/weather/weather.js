import React from 'react';
import s from './weather.module.css';

const Weather = () => {
    return(
        <div className={s.box}>
            <h2 className={s.title}>pohang</h2>
            <p className={s.paragraph}>2022년 5월 21일, 토요일</p>
        </div>
    );
}

export default Weather;