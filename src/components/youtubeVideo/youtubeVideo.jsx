import React, {useState,useEffect} from 'react';
import s from './youtubeVideo.module.css';

const YoutubeVideo = ({youtube}) => {
    const [video, setVideo] = useState(['http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com']);
    const [videoTitle, setVideoTitle] = useState('집중력 높이는 음악');
    useEffect(()=>{
        youtube
            .getVideo()
            .then(response=>{
                const videoId = response.items[0].id.videoId;
                const title = response.items[0].snippet.title;
                setVideo(`https://www.youtube.com/embed/${videoId}`);
                setVideoTitle(title);
            });
    },[]);
    return(
        <div className={s.box}>
            <h3 className={s.title}>{videoTitle}</h3>
            <iframe className={s.video} type="text/html"
            src={video}
            frameborder="0"></iframe>
        </div>
    )
}

export default YoutubeVideo;