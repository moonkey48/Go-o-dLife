class Youtube{
    getVideo(query){
        if(query===null || query === ''){
            query = '집중력 높이는';
        }
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(response => response.json());
    }
}
export default Youtube;