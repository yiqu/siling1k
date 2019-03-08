var request = require('request');
var moment = require('moment');
const URL = "https://kq-1-1a499.firebaseio.com/updateTime.json";

request.post(
    URL,
    { json: { builtTime: moment() } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);