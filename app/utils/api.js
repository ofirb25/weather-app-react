import axios from 'axios';

const KEY = '&APPID=d2bd923726d8850b7677856f80cb52cd'
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q='
const UNITS= '&units=metric'
function getCityData (cityName) {
   return axios.get(`${API_URL}${cityName}${KEY}${UNITS}`)
    .then(({data})=>{        
        if(data) return data
        else throw err
    })
    .catch(err=>{
        throw err
    })
}



export default {
    getCityData
}