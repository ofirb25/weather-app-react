
const express = require('express')
const app = express()
var cors = require('cors')

const axios = require('axios');

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

const KEY = '&APPID=d2bd923726d8850b7677856f80cb52cd';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const UNITS = '&units=metric';



app.get('/get-weather/:cityName', cors(corsOptions), (req, res) => {
    var cityName = req.params.cityName;
    axios.get(`${API_URL}${cityName}${KEY}${UNITS}`)
        .then(({ data }) => {
            res.json(data);
        });
})

app.listen(3000, () => console.log('listening on port 3000!'))