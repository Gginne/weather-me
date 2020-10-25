require('dotenv').config()
const API_KEY = process.env.API_KEY 

//GET API data of current weather
async function getCurrentWeather(lat, lon) {
    let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    let data = await res.json()
    return data
}
//GET API data of searched weather
async function getWeatherSearch(city) {
    let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    let data = await res.json()
    return data
}

//GET API data of weather forecast
async function getWeatherForecast(lat, lon) {
    let res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    let data = await res.json()
    return data
}

//Export Async Functions
module.exports.CurrentData = getCurrentWeather
module.exports.SearchWeather = getWeatherSearch
module.exports.ForecastData = getWeatherForecast


//Change Temperature to Farenheit
function toFarenheit(temp) {
    const celcius = temp - 273.15
    const farenheit = (celcius * 1.8) + 32
    return Math.floor(farenheit)
}

module.exports.toFarenheit = toFarenheit
