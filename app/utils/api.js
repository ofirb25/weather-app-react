import axios from 'axios';

const KEY = '&APPID=d2bd923726d8850b7677856f80cb52cd';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const UNITS= '&units=metric';

const SERVER_BASE_URL = 'http://localhost:3000/get-weather/'

function getCityData_client (cityName) {
   return axios.get(`${API_URL}${cityName}${KEY}${UNITS}`)
    .then(({data})=>{      
        if(data) return data
        else throw err
    })
    .catch(err=>{
        throw err
    })
}

function getCityData_server (cityName) {
    return axios.get(`${SERVER_BASE_URL}${cityName}`)
     .then(({data})=>{        
        console.log('data',data)  
         if(data) return data
         else throw err
     })
     .catch(err=>{
         throw err
     })
 }

export default {
    getCityData_client,
    getCityData_server
}