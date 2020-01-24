import React from 'react'
import Layout from '../components/layout'
import { CurrentData, toFarenheit } from '../API/weather'

class IndexPage extends React.Component {

    constructor() {
        super()
        this.state = {
            data: {},
            weather: {},

        }
    }

    componentDidMount() {
        if ('geolocation' in navigator) {
            //Set Current Weather Data to State
            navigator.geolocation.getCurrentPosition(position => {
                //Determin current latitude and longitude
                let coord = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };

                CurrentData(coord.lat, coord.lon).then(data => {
                    const { temp, feels_like, temp_min, temp_max, pressure, humidity } = data.main
                    //Set current weather data to state
                    this.setState({
                        data,
                        temp: toFarenheit(temp),
                        feels_like: toFarenheit(feels_like),
                        temp_min: toFarenheit(temp_min),
                        temp_max: toFarenheit(temp_max),
                        pressure, humidity,
                        weather: data.weather[0],
                        wind_speed: data.wind.speed
                    })

                })

            });

        }else{
            alert("Current location not found...")
        }

    }

    render() {
        return (
            <Layout>

                <div className="row center-align">
                    <div className="col s4">
                        <h4>{this.state.feels_like}°</h4>
                        <p>FEELS LIKE</p>
                    </div>
                    <div className="col s4">
                        <h4>{this.state.temp_min}°</h4>
                        <p>MIN TEMPERATURE</p>
                    </div>
                    <div className="col s4">
                        <h4>{this.state.temp_max}°</h4>
                        <p>MAX TEMPERATURE</p>
                    </div>

                </div>
                <hr></hr>
                <div className="row center-align">

                    <div className="col s4">
                        <h4>{this.state.pressure} hPa</h4>
                        <p>PRESSURE</p>
                    </div>

                    <div className="col s4">
                        <h4>{this.state.humidity}%</h4>
                        <p>HUMIDITY</p>
                    </div>

                    <div className="col s4">
                        <h4>{this.state.wind_speed} MPH</h4>
                        <p>WIND SPEED</p>
                    </div>
                </div>


            </Layout>
        )
    }

}

export default IndexPage
