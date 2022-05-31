import React, {useState,useEffect,useRef} from 'react';
import s from './youtubeVideo.module.css';

const YoutubeVideo = ({youtube}) => {
    const formRef = useRef();
    const inputRef = useRef();
    const [video, setVideo] = useState(['http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com']);
    const [videoTitle, setVideoTitle] = useState('집중력 높이는 음악');
    useEffect(()=>{
        youtube
            .getVideo('집중력 높이는')
            .then(response=>{
                const videoId = response.items[0].id.videoId;
                const title = response.items[0].snippet.title;
                setVideo(`https://www.youtube.com/embed/${videoId}`);
                setVideoTitle(`${title.substr(0,23)}...`);
            });
    },[youtube]);
    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(inputRef.current.value);
        youtube
        .getVideo(inputRef.current.value)
        .then(response=>{
            const videoId = response.items[0].id.videoId;
            const title = response.items[0].snippet.title;
            setVideo(`https://www.youtube.com/embed/${videoId}`);
            setVideoTitle(`${title.substr(0,23)}...`);
        });
        formRef.current.reset();
    }
    return(
        <div className={s.box}>
            <h3 className={s.title}>{videoTitle}</h3>
            <form ref={formRef}  className={s.form} onSubmit={(e)=>handleSearch(e)} >
                <span className={s.inputDesc} >검색하기</span>
                <input ref={inputRef} className={s.input} type="text"/>
            </form>
            <iframe className={s.video} title={videoTitle} type="text/html"
            src={video}
            frameBorder="0"></iframe>
        </div>
    )
}

export default YoutubeVideo;