import React, {Component} from "react";
class ProgressTracker extends Component{
  calculatePercent = function() {
    return (this.props.amountEnrolled / this.props.amountPossible) * 100;
  }.bind(this);
  render(){
    return(
      <div className="progress-tracker">
        <label className="progress-tracker__label">Progress Tracker</label>
        <div className="progess-tracker__percentage">
          {this.calculatePercent()}%
        </div>
        <div className="progess-tracker__courses-left">
          {(this.props.amountPossible - this.props.amountEnrolled != 0) ? `${this.props.amountPossible - this.props.amountEnrolled} courses left to schedule.` : "No more courses left to schedule."}
        </div>
      </div>
    );
  }
}
export default ProgressTracker;
