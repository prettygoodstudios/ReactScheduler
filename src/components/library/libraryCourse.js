import React, {Component} from "react";
import Icon from "../icon";
import Arrow from "../arrow";
class LibraryCourse extends Component{
  render(){
    return(
      <div className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">{this.props.title}</label>
          { Icon("fas fa-check", "library-course__icon") }
        </div>
        <Arrow className="library-course__arrow"/>
        { Icon("fas fa-plus-circle", "library-course__action")}
        <div className="libary-course__description">
          <label>Course Description</label>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
export default LibraryCourse;
