import React,{useState, useEffect} from 'react';
import s from './weather.module.css';
const axios = require('axios');

const Weather = ({weather,translateUnix}) => {
    const [day,setDay] = useState(['2022','May','30','12','30'])
    const [info, setInfo] = useState({
        dt: 0,
        city: 'Pohang',
        temp_now:20,
        temp_max:26,
        temp_min:15,
        desc: '맑음'
    });
    const [pos, setPos] = useState([37.5,127])
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;   
            setPos([lat,lon])
        });
    },[]);
    useEffect(()=>{
        weather
        .getWeather(pos[0],pos[1])
        .then(result=>{
            const new_info = {
                dt: result.data.dt,
                city: result.data.name,
                temp_now:Math.round(result.data.main.temp-273.16),
                temp_max:Math.round(result.data.main.temp_max-273.16),
                temp_min:Math.round(result.data.main.temp_min-273.16),
                desc: result.data.weather[0].description
            }
            setInfo(new_info);
        });
    },[pos]);
    useEffect(()=>{
        const unixTimeStamp = info.dt;
        const date = new Date(unixTimeStamp*1000);
        const weeks = ['일','월', '화', '수', '목', '금', '토']
        const year =date.getFullYear();
        const month = date.getMonth()+1;
        const day =weeks[date.getDay()];
        const hour = date.getHours();
        const minuite = date.getMinutes();
        
        setDay([year, month, day, hour, minuite]);
    },[info]);
    return(
        <div className={s.box}>
            <div className={s.leftSection}>
                <h2 className={s.titleMid}>{info.city}</h2>
                <p className={s.paragraphSmall}>{day[0]}년 {day[1]}월 {day[2]}요일 {day[3]}:{day[4]}</p>
                <p className={s.paragraphLarge}>현재 기온 <span className={s.titleMid} >{info.temp_now}°C</span></p>
                <p className={s.paragraphLarge}>최고 기온 <span className={s.titleMid} >{info.temp_max}°C</span></p>
            </div>
            <div className={s.rightSection}>
                <img className={s.icon} src='/images/weatherIcon.png' alt='weather'></img>
                <p className={s.paragraphLarge}>최저 기온<span className={s.titleMid} >{info.temp_min}°C</span></p>
            </div>
        </div>
    );
}

export default Weather;