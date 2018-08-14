import React from "react";
import ClockDate from "./ClockDate";
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
    const {icon} = this.props
    //const result = this.props.forecast.map(list => <li key={list.dt}><span>{list.main.temp}</span><span style={{backgroundImage: `url(https://openweathermap.org/img/w/${list.icon}.png)`}}></span></li>)
    return(
      <HashRouter>
        <div>
          <div className = "clock-nav">
          <nav><i class="fa fa-bars" aria-hidden="true"></i></nav>
          <ClockDate/>
          </div>
          <div className = "city">
            <p className = "center">{this.props.city}</p>
            <p>{Math.round(this.props.temperature - 273)}&#8451;</p>

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
//style={{backgroundImage: `url(https://openweathermap.org/img/w/${weather[0].icon}.png)`}}

//<img class="wind" src="favicons/wind.png" alt="wind"></img>

export default Weather;
