const axios = require('axios');

class Weather{
    getWeather(lat,lon){

        const result = axios({
            method : 'get',
            url : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
            });
        return result;
    }
}
export default Weather;