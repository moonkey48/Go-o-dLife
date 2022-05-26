const axios = require('axios');

class Weather{
    getWeather(lat,lon){

        const result = axios({
            method : 'get',
            url : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=e1e5b291542d5e36d09278dc087f96b3`
            });
        return result;
    }
}
export default Weather;