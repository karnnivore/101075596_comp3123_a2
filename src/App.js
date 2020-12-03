import React from 'react';
import './App.css';
import API from './API';

class App extends React.Component{
  state={
    forecast: [],
    loading: true
  }
  //load data from api using my api key
  async componentDidMount() {
    try {
        let forecast = await API.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=3ec447546b00e21f3d79c5f5167d121a');
        this.setState({forecast: forecast, loading: false})
    } catch(e) {
        console.log(`Axios request failed: ${e}`)
    }        
  }
  render(){ 
    if(this.state.loading){//waits for data to load so no undefined errors
      return <div>loading...</div>
    }
    return(
    <div className='Container'>
    <h1>Local Forecast</h1>
    <p>{this.state.forecast.data.name+', '+this.state.forecast.data.sys.country}</p>
    </div>
  );}
}

export default App;
