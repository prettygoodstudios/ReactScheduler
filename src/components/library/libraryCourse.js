import React, {Component} from "react";
import {connect} from "react-redux";
import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action";
import * as actions from "../../actions";
class LibraryCourse extends Component{
  render(){
    return(
      <div className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">{this.props.title}</label>
          { Icon("fas fa-check", "library-course__icon") }
        </div>
        <div className="library-coures__line"></div>
        <Arrow className="library-course__arrow"/>
        <Action onClick={() => this.props.toggleEnrolled(this.props.id)}/>
        <div className="libary-course__description">
          <label>Course Description</label>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
export default connect(null, actions)(LibraryCourse);
