import React, {Component} from "react";
class ScheduleCourse extends Component{
  render(){
    return(
      <div className="schedule-course">
        <div className="schedule-course__title">{this.props.title}</div>
      </div>
    );
  }
}
export default ScheduleCourse;
