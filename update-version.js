var request = require('request');
var moment = require('moment');
const URL = "https://siling1k.firebaseio.com/updateTime.json";

request.post(
    URL,
    { json: { builtTime: moment() } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);