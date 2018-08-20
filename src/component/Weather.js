import React from "react";
import ClockDate from "./ClockDate";
import MyComponent from "./MyComponent";
//import { weatherConditions } from '../utils/weatherConditions';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const apiKey = "a4cbf5c849acc7b2d67d4c5fef6b5a4f";


class Weather extends React.Component{


  render(){

    const {icon,forecast} = this.props

  //  const result = forecast && forecast.list ? forecast.list.map(element =><li key={element.dt}><span>{Math.round(element.main.temp - 273.15)}&#8451;</span><div style={{backgroundImage: `url(https://openweathermap.org/img/w/${element.weather[0].icon}.png)`}}></div></li>) : null
      const result = forecast && forecast.list ? forecast.list.map(element => {
      return  <li key={element.dt}>
    <span>{Math.round(element.main.temp - 273.15)}&#8451;</span>
    <div className = "forecast" style={{backgroundImage: `url(https://openweathermap.org/img/w/${element.weather[0].icon}.png)`}}></div></li>}) : null
    //const resultArr = forecast && forecast.list ? forecast.list.map(element => element.dt) : null;
    //console.log(forecast.list[0].weather[0].icon)
    const dataFirstDay = result !== null ? result.slice(9,10):null;
    const dataSecondDay = result !== null ? result.slice(17,18):null;
    const dataThirdDay = result !== null ? result.slice(25,26):null;



    return(
      <HashRouter>
        <div>
          <div className = "clock-nav">
          <nav><i className="fa fa-bars" aria-hidden="true"></i></nav>
          <ClockDate/>
          </div>
          <div className = "city">
            <p className = "center">{this.props.city}{console.log(this.props.forecast)}</p>
            <p>{Math.round(this.props.temperature - 273.15)}&#8451;</p>

          </div>
          <div className = "wrapp">
              <div className = "pix" style={{backgroundImage: `url(https://openweathermap.org/img/w/${icon}.png)`}}></div>
          </div>

          <div className = "data">
            <div>
              <p>humidity:</p>
              <p>{this.props.humidity}%</p>
            </div>
            <div>
              <p>pressure:</p>
              <p>{this.props.pressure}hPa</p>
            </div>
            <div>
              <p>wind:</p>
              <p>{this.props.wind}km/h</p>
            </div>
          
            <MyComponent/>

          <div className = "forecastList">
            <ul>
              {dataFirstDay}
              {dataSecondDay}
              {dataThirdDay}
            </ul>
          </div>
          </div>

        </div>
				</HashRouter>
    )
  }

}
Weather.propTypes = {
  forecast: PropTypes.object
}

//konwertowanie kelvin na celsiusz     <p>{Math.round(this.props.temperature - 273.15)}&#8451;</p>

//style={{backgroundImage: `url(https://openweathermap.org/img/w/${weather[0].icon}.png)`}}
//  style={ backgroundColor: weatherConditions[weather].color }

//<img class="wind" src="favicons/wind.png" alt="wind"></img>

export default Weather;
