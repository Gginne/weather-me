import React from 'react'
import Layout from '../components/layout'
import { SearchWeather, toFarenheit } from '../API/weather'
import WeatherSearch from '../components/weathersearch'


class SearchPage extends React.Component {

    constructor() {
        super()
        this.state = {
            input: '',
            city: '',
            cityData: null,


        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ input: e.target.value })

    }

    handleSubmit(e) {
        this.setState({ city: this.state.input })
        SearchWeather(this.state.input).then(data => {
            const date = new Date((data.dt - data.timezone) * 1000)
            const hours = date.getHours()
            //Set Searched weather data to state
            this.setState({
                cityData: {
                    name: `${data.name}, ${data.sys.country}`,
                    weather: data.weather[0].main,
                    description: data.weather[0].description,
                    hours,
                    temp: toFarenheit(data.main.temp)

                }
            })

            console.log(data)
        }).catch(err => console.log(`Country not found: ${err}`))

        e.preventDefault()
    }

    render() {

        let searchCard = this.state.cityData ?

            <WeatherSearch name={this.state.cityData.name}
                weather={this.state.cityData.weather}
                description={this.state.cityData.description}
                hours={this.state.cityData.hours}
                temp={this.state.cityData.temp} /> : ''

        return (
            <Layout>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="row">
                        <div className="input-field col s9">
                            <input type="text" onChange={e => this.handleChange(e)}
                                value={this.state.input}
                                placeholder="Enter a city">
                            </input>
                        </div>
                        <div className="input-field col s3">
                            <button className="btn green accent-4">Search</button>
                        </div>
                    </div>


                </form>

                {searchCard}

            </Layout>
        )
    }

}

export default SearchPage
