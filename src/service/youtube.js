class Youtube{
    getVideo(){
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=집중력 높이는&key=AIzaSyBQYrwJMxn_fXnabIPdct-IVBh4HZxVzmU`)
            .then(response => response.json());
    }
}
export default Youtube;