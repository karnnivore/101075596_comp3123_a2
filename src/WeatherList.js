import React, { Component } from 'react';
import API from './API';

export default class WeatherList extends Component {
    state={
        forecast: [],
    }



    render() {
        return(
            <div className='Container'>
                <h1>Local Forecast</h1>
                <p>{this.state.forecast.data.name}</p>
            </div>
        )
    }


}