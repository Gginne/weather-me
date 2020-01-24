import React from 'react'
import { CurrentData, toFarenheit } from '../API/weather'
import ReactAnimatedWeather from 'react-animated-weather';
import Iconfig from './iconfig.js'

class CurrentWeather extends React.Component {

    constructor() {
        super()
        this.state = {
            data: {},
            weather: {},
            temp: 0

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
        
                CurrentData(coord.lat,coord.lon).then(data => {
                    this.setState({
                        data,
                        weather: data.weather[0],
                        temp: toFarenheit(data.main.temp)
                    })
                })
        
            });
            
        } else{
            alert("Current location not found...")
        }
        
    }

    render() {

        //Get Current Time
        const hours = new Date().getHours();

        //Set Icon Parameters and Get time
        const setIcon = new Iconfig(this.state.weather.main, hours, 150)
        const time = setIcon.daytime

        //Set Background of Current Weather
        const bgCol = time === 'day' ? 'blue' : time === 'noon' ? 'orange lighten-2' : 'purple darken-3'


        return (
            <div className={`current-weather-card ${bgCol}`}>

                <h2>{this.state.temp}° {this.state.data.name}</h2>
                <ReactAnimatedWeather
                    icon={setIcon.icon}
                    color={setIcon.color}
                    size={setIcon.size}
                    animate={setIcon.animate}
                />
                <h5>{this.state.weather.main}</h5>
                <p>{this.state.weather.description}</p>

            </div>
        )
    }

}



export default CurrentWeather


