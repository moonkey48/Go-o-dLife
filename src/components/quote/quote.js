import React from 'react';
import s from './quote.module.css';

const Quote = () => {
    return(
        <div className={s.box}>
            <h2 className={s.title}>
                Energy and Persistence conquer all thinns.<br/>
                열정과 끈기는 모든 것을 이겨낸다.
                <span className={s.from}>-Benjamin Franklin</span>
            </h2>
        </div>
    );
}

export default Quote;