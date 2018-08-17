import React from "react";
import ClockDate from "./ClockDate";
//import { weatherConditions } from '../utils/weatherConditions';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';


const apiKey = "a4cbf5c849acc7b2d67d4c5fef6b5a4f";


class Weather extends React.Component{



  render(){
    //console.log(this.props.forecast)
    const {icon} = this.props
    const result = this.props.forecast//.list.map(element => <li key={element.dt}><span>{element.main.temp}</span><span style={{backgroundImage: `url(https://openweathermap.org/img/w/${element.icon}.png)`}}></span></li>)
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

          </div>
          <div>
            <ul>

            </ul>
          </div>
        </div>
				</HashRouter>
    )
  }

}

//konwertowanie kelvin na celsiusz     <p>{Math.round(this.props.temperature - 273.15)}&#8451;</p>

//style={{backgroundImage: `url(https://openweathermap.org/img/w/${weather[0].icon}.png)`}}
//  style={ backgroundColor: weatherConditions[weather].color }

//<img class="wind" src="favicons/wind.png" alt="wind"></img>

export default Weather;
