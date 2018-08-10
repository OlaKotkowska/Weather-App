import React from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';


const apiKey = "a4cbf5c849acc7b2d67d4c5fef6b5a4f";

class Form extends React.Component{

  render(){
    return(
      <div className = "wrappForm">
        <form className = "form">
          <input type = "text" value={this.props.inputText} onChange={e => this.props.handleChange(e)}></input>
          <div className = "wrappButton">
            <button onClick = {(e) => {this.props.getWeather(e, this.props.history);this.props.getForecast(e, this.props.history)}}></button>
            </div>
        </form>
      </div>
    )
  }
}
//<a href="#" onClick={(event) => { func1(); func2();}}>Test Link</a>
export default Form;
