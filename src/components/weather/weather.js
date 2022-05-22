import React from 'react';
import s from './weather.module.css';

const Weather = () => {
    return(
        <div className={s.box}>
            <div className={s.leftSection}>
                <h2 className={s.titleLarge}>pohang</h2>
                <p className={s.paragraphSmall}>2022년 5월 21일, 토요일</p>
                <p className={s.paragraphLarge}>최고 기온 <span className={s.titleMid} >22°C</span></p>
                <p className={s.paragraphLarge}>최저 기온 <span className={s.titleMid} >15°C</span></p>
            </div>
            <div className={s.rightSection}>
                <img className={s.icon} src='/images/weatherIcon.png' alt='weather'></img>
                <p className={s.paragraphLarge}>강수 학률 <span className={s.titleMid} >0%</span></p>
            </div>
        </div>
    );
}

export default Weather;