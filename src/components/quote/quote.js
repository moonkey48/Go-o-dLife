import React,{useState,useEffect} from 'react';
import s from './quote.module.css';

const Quote = ({quote}) => {
    const [message, setMessage] = useState(['Energy and Persistence conquer all thinns.','Benjamin Franklin'])
    useEffect(()=>{
        quote.getMessage()
        .then(result=>{
            const author = result.author;
            const text = result.quote;
            setMessage([text, author]);
        });
    },[quote]);
    return(
        <div className={s.box}>
            <h2 className={s.title}>
                {message[0]}<br/>
                <span className={s.from}>-{message[1]}</span>
            </h2>
        </div>
    );
}

export default Quote;