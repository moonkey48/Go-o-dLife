import React,{useState} from 'react';
import s from './achieveRate.module.css';

const AchieveRate = () => {
    const [rates, setRates] = useState(['80','65','95']);
    return(
        <div className={s.box}>
            <div>
                <h2 className={s.titleLarge}>최근 목표 달성도</h2> 
                <div className={s.line}></div>
            </div>
            <div className={s.rates}>
                {rates.map(rate=>{
                    return <div key={rate} className={s.rate} style={{height:`${rate}px`}}/>
                })}
            </div>
        </div>
    );
}

export default AchieveRate;