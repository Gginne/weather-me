import React from 'react'
import CurrentWeather from './currentweather'
import Navigation from './navigation'


const Header = () => {
    return (
        <header>
            <CurrentWeather />
            <Navigation />
        </header>
    )
}

export default Header
