import React from 'react';
import AchieveRate from '../achieveRate/achieveRate';
import FindOthers from '../findOthers/findOthers';
import Header from '../header/header';
import MidTest from '../midTest/midTest';
import Quote from '../quote/quote';
import ToDoList from '../toDoList/toDoList';
import Weather from '../weather/weather';
import s from './main.module.css';

const Main = () => {
    return(
        <div className={s.container}>
            <div className={s.main}>
                <Header/>
                <div className={s.content}>
                    <div className={s.leftSection}>
                        <MidTest/>
                        <FindOthers/>
                        <Quote/>
                    </div>
                    <ToDoList/>
                    <div className={s.rightSection}>
                        <Weather/>
                        <AchieveRate/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;