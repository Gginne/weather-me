import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather';
import Iconfig from './iconfig'

const ForecastCards = props => {

    //Set Icon Params
    let setIcon = new Iconfig(props.weather, props.hours, 50)
    //Format time to AM/PM
    let hourFormat = props.hours >= 12 ? `${props.hours - 12} PM` : `${props.hours} AM`
    return (

        <div className="card-panel col s6 m4 l3">

            <div className="row">
                <div className="col s6">
                    <span><h5>{props.date}</h5> <p>{hourFormat}</p></span>
                </div>
                <div className="col s6">
                    <span><h4>{props.temperature}°</h4></span>
                </div>
            </div>

            <div className="row">
                <div className="col s4 m3 l3">
                    <ReactAnimatedWeather
                        icon={setIcon.icon}
                        color={setIcon.color}
                        size={setIcon.size}
                        animate={setIcon.animate}
                    />

                </div>
                <div className="col s8 m9 l9">
                    <p>{props.weather}</p>
                    <p>{props.description}</p>
                </div>

            </div>
        </div>


    )
}

export default ForecastCards
