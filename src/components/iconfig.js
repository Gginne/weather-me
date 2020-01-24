class Iconfig {
    constructor(weather, hours, size, animate = true) {

        //Determine if Daytime is Day, Night, or Noon
        this.daytime = hours >= 8 && hours <= 15 ? 'day' : hours > 15 && hours < 18 ? 'noon' : 'night'
        //Change Daytime for Icons
        this.Icontime = this.daytime === 'day' || this.daytime === 'noon' ? 'DAY' : 'NIGHT'

        //Determine Icon Name based on Daytime and Weather
        this.weather = weather === 'Clouds' ? 'PARTLY_CLOUDY'
            : weather === 'Drizzle' ? 'SLEET'
                : weather === 'Snow' || weather === 'Rain' || weather === 'Clear' ? weather.toUpperCase()
                    : 'FOG'
        //Format Icon Name
        this.icon = weather === 'Clear' || weather === 'Clouds' ? `${this.weather}_${this.Icontime}` : this.weather

        //Set Icon Color
        this.color = weather === 'Clear' || weather === 'Clouds' ? '#ffeb3b'
            : weather === 'Rain' || weather === 'Drizzle' ? '#80cbc4' : 'grey'

        //Set Icon Size
        this.size = size
        //Set Animation, Default = True
        this.animate = animate
    }
}


export default Iconfig

