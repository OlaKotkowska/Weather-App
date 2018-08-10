import React from "react";
import Form from "./component/Form";
import Weather from "./component/Weather";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const apiKey = "a4cbf5c849acc7b2d67d4c5fef6b5a4f";
//api.openweathermap.org/data/2.5/forecast?q=London&apikey=a4cbf5c849acc7b2d67d4c5fef6b5a4f

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputText: "",
      city: undefined,
      temperature: undefined,
      country: undefined,
      humidity: undefined,
      wind: undefined,
      pressure: undefined,
      clouds: undefined,
      visibility:undefined,
      icon: undefined,
      forecast:[],
      error: undefined

    }
  }

  handleChange = (event) => {
         this.setState({
               inputText: event.target.value
         })
     };

  getWeather = (event, history) =>{
    event.preventDefault();
    //const city = event.target.elements.city.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputText}&apikey=${apiKey}`)
    .then(respose => respose.json())//pobiera jsona
    .then(obj => this.setState({  //zwraca obiekt z pogodą dla danego miasta
      city: obj.name,
      temperature: obj.main.temp,
      country: obj.country,
      humidity: obj.main.humidity,
      wind: obj.wind.speed,
      pressure: obj.main.pressure,
      clouds: obj.clouds,
      visibility:obj.visibility,
      icon: obj.weather[0].icon,
      error: " "
    }, ()=> {
      history.push('/weather')
    }
   ))
  }
  getForecast = (event, history) =>{
    event.preventDefault();
    fetch(`api.openweathermap.org/data/2.5/forecast?q=${this.state.inputText}&apikey=${apiKey}`)
    .then(respose => respose.json())//pobiera jsona
    .then(forcast => this.setState({
      forecast: forcast,
      error: " "
    }, ()=> {
      history.push('/weather')
    }
   ))
  }
render(){
  return(

    <HashRouter>
    <div className = "wrapper">
      <Switch>
        <Route exact path='/' render = {props => <Form {...props} getWeather ={this.getWeather} getForecast={this.getForecast} inputText = {this.state.inputText} handleChange = {this.handleChange}/>} />
        <Route path = '/weather'
        render = {props => <Weather {...props}
                            temperature = {this.state.temperature}
                            city = {this.state.city}
                            humidity = {this.state.humidity}
                            pressure = {this.state.pressure}
                            wind = {this.state.wind}
                            icon = {this.state.icon}/>}/>
      </Switch>
      </div>
    </HashRouter>
  )
}
}


//
// <HashRouter>
// 					<div>
// 						<Switch>
// 							<Route exact path='/' component={Home} />
// 							<Route path='/services/:service' component={ServiceInfo} />
// 							<Route path='*' component={NotFound} />
// 						</Switch>
// 					</div>
// 				</HashRouter>



// class App extends React.Component {
//   state = {
//     temperature: undefined,
//     city: undefined,
//     country: undefined,
//     humidity: undefined,
//     description: undefined,
//     error: undefined
//   }
//   getWeather = async (e) => {
//     e.preventDefault();
//     const city = e.target.elements.city.value;
//     const country = e.target.elements.country.value;
//     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
//     const data = await api_call.json();
//     if (city && country) {
//       this.setState({
//         temperature: data.main.temp,
//         city: data.name,
//         country: data.sys.country,
//         humidity: data.main.humidity,
//         description: data.weather[0].description,
//         error: ""
//       });
//     } else {
//       this.setState({
//         temperature: undefined,
//         city: undefined,
//         country: undefined,
//         humidity: undefined,
//         description: undefined,
//         error: "Please enter the values."
//       });
//     }
//   }
//   render() {
//     return (
//       <div>
//         <div className="wrapper">
//           <div className="main">
//             <div className="container">
//               <div className="row">
//                 <div className="col-xs-5 title-container">
//                   <Titles />
//                 </div>
//                 <div className="col-xs-7 form-container">
//                   <Form getWeather={this.getWeather} />
//                   <Weather
//                     temperature={this.state.temperature}
//                     humidity={this.state.humidity}
//                     city={this.state.city}
//                     country={this.state.country}
//                     description={this.state.description}
//                     error={this.state.error}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

export default App;
