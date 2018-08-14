import React from "react";


class ClockDate extends React.Component{
  constructor(props){
              super(props);
              this.state={
                  date: new Date()
              }
          }
          componentDidMount(){
              this.intervalID = setInterval(()=>{
                  this.setState({
                      date: new Date()
                  })
              }, 1000)
          }

          componentWillUnmount(){
              clearInterval(this.intervalID);
          }

          weekdayName = () =>  {
                var d = this.state.date;
                var weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";

                return weekday[d.getDay()];
            }


          render(){

        return (
            <div className = "clock">
                <p>{this.state.date.toLocaleTimeString()}</p>
                <p><span>{this.weekdayName()}</span></p>
            </div>
        )
    }
}



export default ClockDate;
