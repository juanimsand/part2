import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Clima = (props) => {

    let params = props.params
    params.query = props.capital
    const [clima, setClima] = useState({
        temperature: '',
        weather_icons: [],
        wind_dir: '',
        wind_speed: ''
    })

    useEffect(() => {
        console.log('effect clima')
        axios
            .get('http://api.weatherstack.com/current', { params }).then(response => {
                console.log('promise fulfilled clima')
                console.log(response.data.current)
                setClima(response.data.current)
            })
    }, [])

    console.log('Antes del return de clima')
    return (
        <div>
            <h1>Weather in {props.capital}</h1>
            <p>Temperature: {clima.temperature} celcius</p>
            <img src={clima.weather_icons[0]} alt="imagen" />
            <p>Wind: {clima.wind_speed} mph Direction: {clima.wind_dir}</p>

        </div>);
    
}

//
export default Clima