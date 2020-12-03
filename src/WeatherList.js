import React, { Component } from 'react';
import axios from 'axios';
import API from './API';

export default class WeatherList extends Component {
    state={
        forecast: [],
    }

    async componentDidMount() {
        try {
            let forecast = await API.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=3ec447546b00e21f3d79c5f5167d121a');
            this.setState({forecast})
        } catch(e) {
            console.log(`Axios request failed: ${e}`)
        }        
    }

    render() {
        return(
            <div className='Container'>
                <h1>Local Forecast</h1>
            </div>
        )
    }
}