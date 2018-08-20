import React  from 'react';
import Moment from 'react-moment';

export default class MyComponent extends React.Component {
    render() {
        const date = new Date();
        //const day = date.getDay();
        return (
            <div className = "namesDays">

                <Moment format="dddd" add={{ days: 1}}>{date}</Moment>
                <Moment format="dddd" add={{ days: 2}}>{date}</Moment>
                <Moment format="dddd" add={{ days: 3}}>{date}</Moment>

            </div>
        );
    }
}


// const {icon, forecast} = this.props
//        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//        const date = new Date()
//        const currentDay = date.getDay();
//        const nexDay = currentDay == days.length-1 ? <p>{days[0]}</p> : <p>{days[nexDay]}</p>
//        console.log(currentDay)
//        console.log(nexDay)
