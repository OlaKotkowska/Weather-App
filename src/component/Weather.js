import React from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

class Weather extends React.Component{

  render(){
    const {icon} = this.props
    const result = this.props.forecast.map(weather => <li key={weather.id}><span>{weather.main.temp}</span><span style={{backgroundImage: `url(https://openweathermap.org/img/w/${weather.icon}.png)`}}></span></li>)
    return(
      <HashRouter>
        <div>
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
            <div>
              <ul>
                {result}
              </ul>
            </div>
          </div>
        </div>
				</HashRouter>
    )
  }
}
//style={{backgroundImage: `url(https://openweathermap.org/img/w/${weather[0].icon}.png)`}}

//<img class="wind" src="favicons/wind.png" alt="wind"></img>

export default Weather;
