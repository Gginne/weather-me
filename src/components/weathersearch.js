import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather';
import Iconfig from './iconfig'

const WeatherSearch = props => {

    //Set Icon Params
    let setIcon = new Iconfig(props.weather, props.hours, 100)
    //Format Time in AM/PM
    let hourFormat = props.hours >= 12 ? `${props.hours - 12} PM` : `${props.hours} AM`

    return (
        <div className="card-panel center-align">
            <h3>{props.temp}° {props.name}</h3>
            <p>{hourFormat}</p>
            <ReactAnimatedWeather
                icon={setIcon.icon}
                color={setIcon.color}
                size={setIcon.size}
                animate={setIcon.animate}
            />
            <h5>{props.weather}</h5>
            <p>{props.description}</p>
        </div>
    )
}

export default WeatherSearch
