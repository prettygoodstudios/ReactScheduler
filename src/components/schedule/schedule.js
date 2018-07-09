import React, {Component} from "react";
import {connect} from "react-redux";


import Gradient from "../gradient";
import ScheduleCourse from "./scheduleCourse";
import ProgressTracker from "../progressTracker";
class Schedule extends Component {
  renderItems = () => {
    const data = this.props.courses;
    const filt = data.filter((c) => c.enrolled);
    this.amountEnrolled = filt.length;
    return filt.map( (c, i) => <ScheduleCourse {...c} key={i}/>);
  }
  render(){
    return(
      <div className="schedule">
        <h1 className="schedule__title">My Schedule</h1>
        { this.renderItems() }
        <ProgressTracker amountPossible={5} amountEnrolled={this.amountEnrolled}/>
        <Gradient />
      </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps)(Schedule);
