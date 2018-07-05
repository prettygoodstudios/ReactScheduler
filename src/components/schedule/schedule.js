import React, {Component} from "react";
import {connect} from "react-redux";


import Gradient from "../gradient";
import ScheduleCourse from "./scheduleCourse";
import ProgressTracker from "../progressTracker";
class Schedule extends Component {
  renderItems = () => {
    const data = this.props.courses;
    return data.map( (c, i) => <ScheduleCourse {...c} key={i}/>).filter((c) => c.enrolled);
  }
  render(){
    return(
      <div className="schedule">
        <h1 className="schedule__title">My Schedule</h1>
        { this.renderItems() }
        <ProgressTracker />
        <Gradient />
      </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps)(Schedule);
