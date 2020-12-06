import React from 'react';
import './App.css';
import API from './API';
import styles from './styles.module.css';

class App extends React.Component{
  state={
    forecast: [],
    loading: true,
    upcomingWeather: []
  }
  //load data from api using my api key
  async componentDidMount() {
    try {
        let forecast = await API.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&cnt=5&units=metric&appid=3ec447546b00e21f3d79c5f5167d121a');
        let upcomingWeather = await API.get('http://api.openweathermap.org/data/2.5/forecast?q=Toronto&cnt=5&units=metric&appid=3ec447546b00e21f3d79c5f5167d121a')
        this.setState({
          forecast: forecast, 
          loading: false,
          upcomingWeather: upcomingWeather
        })
    } catch(e) {
        console.log(`Axios request failed: ${e}`)
    }        
  }
  render(){ 
    if(this.state.loading){//waits for data to load so no undefined errors
      return <div>loading...</div>
    }
    return(
    <div className={styles.container}>
      <div className={styles.todayContainer}>
        <h1 className={styles.todayTitle}>Local Weather</h1>
        <img src={`http://openweathermap.org/img/wn/${this.state.forecast.data.weather[0].icon}@2x.png`} className={styles.image} alt="Weather Icon"/>
        <p className={styles.weatherTitle}>{this.state.forecast.data.name+', '+this.state.forecast.data.sys.country+" - " +
        this.state.forecast.data.weather[0].main+', with '+
        this.state.forecast.data.weather[0].description}</p>
        <p className={styles.weatherTitle}>Current: {this.state.forecast.data.main.temp}</p>
        <p className={styles.weatherTitle}>Feels Like: {this.state.forecast.data.main.feels_like}</p>
        <p className={styles.weatherTitle}>High: {this.state.forecast.data.main.temp_max}</p>
        <p className={styles.weatherTitle}>Low: {this.state.forecast.data.main.temp_min}</p>
        <p className={styles.weatherTitle}>Humidity: {this.state.forecast.data.main.humidity}</p>
      </div>
      <div className={styles.futureContainer}>
        <h2 className={styles.futureText}>Weather throughout the day</h2>
        <div className={styles.forecastContainer}>
          <img src={`http://openweathermap.org/img/wn/${this.state.upcomingWeather.data.list[0].weather[0].icon}@2x.png`} style={{height:50}} alt="Weather Icon"/>
          <p className={styles.time}>{this.state.upcomingWeather.data.list[0].dt_txt}</p>
          <p>Current: {this.state.upcomingWeather.data.list[0].main.temp}</p>
          <p>Feels Like: {this.state.upcomingWeather.data.list[0].main.feels_like}</p>
          <p>High: {this.state.upcomingWeather.data.list[0].main.temp_max}</p>
          <p>Low: {this.state.upcomingWeather.data.list[0].main.temp_min}</p>
          <p>Humidity: {this.state.upcomingWeather.data.list[0].main.humidity}</p>
        </div>
        <div className={styles.forecastContainer}>
          <img src={`http://openweathermap.org/img/wn/${this.state.upcomingWeather.data.list[1].weather[0].icon}@2x.png`} style={{height:50}} alt="Weather Icon"/>
          <p className={styles.time}>{this.state.upcomingWeather.data.list[1].dt_txt}</p>
          <p>Current: {this.state.upcomingWeather.data.list[1].main.temp}</p>
          <p>Feels Like: {this.state.upcomingWeather.data.list[1].main.feels_like}</p>
          <p>High: {this.state.upcomingWeather.data.list[1].main.temp_max}</p>
          <p>Low: {this.state.upcomingWeather.data.list[1].main.temp_min}</p>
          <p>Humidity: {this.state.upcomingWeather.data.list[1].main.humidity}</p>
        </div>
        <div className={styles.forecastContainer}>
          <img src={`http://openweathermap.org/img/wn/${this.state.upcomingWeather.data.list[2].weather[0].icon}@2x.png`} style={{height:50}} alt="Weather Icon"/>
          <p className={styles.time}>{this.state.upcomingWeather.data.list[2].dt_txt}</p>
          <p>Current: {this.state.upcomingWeather.data.list[2].main.temp}</p>
          <p>Feels Like: {this.state.upcomingWeather.data.list[2].main.feels_like}</p>
          <p>High: {this.state.upcomingWeather.data.list[2].main.temp_max}</p>
          <p>Low: {this.state.upcomingWeather.data.list[2].main.temp_min}</p>
          <p>Humidity: {this.state.upcomingWeather.data.list[2].main.humidity}</p>
        </div>
      </div>
    </div>
  );}
}

export default App;
