import React from 'react';
import s from './header.module.css'

const Header = () => {
    return(
        <header className={s.header}>
            <h2 className={s.titleMid}>
            Moonkey 님의 갓생을 응원합니다. <br/>
            오늘은 
            “하루 3시간 알고리즘 습관 만들기” <br/>
            도전 5일차입니다.
            </h2>
            <div className={s.profile}>
                <h2 className={s.titleSmall}>Moonkey</h2>
                <img className={s.profileImg} src='/images/profile.png' alt='profile'></img>
            </div>
        </header>
    );
}

export default Header;