class Quote{
    getMessage(){
        const message = fetch('https://api.goprogram.ai/inspiration')
            .then(result=>result.json());
        return message;
    }
}
export default Quote;