import Header from '../../components/header/header'
import React from 'react';
import FindOthers from '../../components/findOthers/findOthers';
import MidTest from '../../components/midTest/midTest';
import Quote from '../../components/quote/quote';
import ToDoList from '../../components/toDoList/toDoList';
import Weather from '../../components/weather/weather';
import YoutubeVideo from '../../components/youtubeVideo/youtubeVideo';
import s from './main.module.css';

const Main = ({quote,handleListChange,weather,youtube,authService}) => {
    return (
    <div className={s.container}>
        <div className={s.main}>
            <Header authService={authService}/>
            <div className={s.content}>
                <div className={s.leftSection}>
                    <MidTest/>
                    <FindOthers/>
                    <Quote quote={quote}/>
                </div>
                <ToDoList handleListChange={handleListChange}/>
                <div className={s.rightSection}>
                    <Weather weather={weather}/>
                    <YoutubeVideo youtube={youtube} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main;