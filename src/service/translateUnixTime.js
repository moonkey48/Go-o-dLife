const axios = require('axios');
class TranslateUnix{
    translate(time){
        const result = axios({
            method: 'get',
            url: `https://showcase.api.linx.twenty57.net/UnixTime/fromunix?timestamp=${time}`
        }).then(console.log);
    }
}
export default TranslateUnix;