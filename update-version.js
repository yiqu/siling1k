var request = require('request');
var moment = require('moment');
const URL = 

request.post(
    'https://kq-1-1a499.firebaseio.com/updateTime.json',
    { json: { builtTime: moment() } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);