import axios from 'axios';

const API_KEY = '1bb844a1a4adaf1ec027c5c0351a7fa1';

// http://api.openweathermap.org/data/2.5/weather?q=pokhara&appid=1bb844a1a4adaf1ec027c5c0351a7fa1&units=metric
const FETCH_WEATHER ='FETCH_WEATHER';
export default  function fetchWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const request =  axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
console.log('Request ', request)
    return {
        type: 'FETCH_WEATHER',
        payload: request
    }

    };
