import React from 'react'
import Layout from '../components/layout'
import ForecastCards from '../components/forecastcards'
import { ForecastData, toFarenheit } from '../API/weather'

class ForecastPage extends React.Component {

    constructor() {
        super()
        this.state = {
            allForecasts: []
        }
    }

    componentDidMount() {
        if('geolocation' in navigator){
            //Set Current Weather Data to State
            navigator.geolocation.getCurrentPosition(position => {
                //Determin current latitude and longitude
                let coord = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };
        
                ForecastData(coord.lat,coord.lon).then(data => {
                    let flist = data.list.map(forecast => {
                        //Determine day and hours
                        const date = new Date(forecast.dt * 1000)
                        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                        const day = date.getDate()
                        const month = months[date.getMonth()]
                        const hours = date.getHours()
                        //Create list of forecasts
                        return {
                            date: `${month}, ${day}`, hours,
                            weather: forecast.weather[0].main,
                            description: forecast.weather[0].description,
                            temperature: toFarenheit(forecast.main.temp)
                        }
                    })
                    //Set list of forecasts to state
                    this.setState({ allForecasts: flist })
                })
        
            });
            
        }else{
            alert("Current Location not found...")
        }
        
       
    }

    render() {
        const forecasts = this.state.allForecasts.map(forecast =>
            <ForecastCards
                key={`${forecast.date}:${forecast.hours}`}
                date={forecast.date}
                hours={forecast.hours}
                weather={forecast.weather}
                description={forecast.description}
                temperature={forecast.temperature}
            />
        )
        return (
            <Layout>
                <div className="row">
                    {forecasts}
                </div>

            </Layout>
        )
    }
}

export default ForecastPage
