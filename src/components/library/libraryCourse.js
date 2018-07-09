import React, {Component} from "react";
import {connect} from "react-redux";
import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action";
import * as actions from "../../actions";
class LibraryCourse extends Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  toggle = function(){
    console.log("toggling");
    console.log(this.state.open);
    const newOpen = (this.state.open) ? false : true
    this.setState({
      open: newOpen
    });
  }.bind(this);
  isSolid = function(){
    return (this.state.open) ? "library-course-selected" : "";
  }.bind(this);
  render(){
    return(
      <div className={`library-course ${this.isSolid()}`}>
        <div className="library-course__title-check">
          <label className="library-course__title">{this.props.title}</label>
          { Icon("fas fa-check", "library-course__icon") }
        </div>
        <div className="library-course__line"></div>
        <Arrow className="library-course__arrow" onClick={this.toggle} open={this.state.open}/>
        <Action onClick={() => {this.props.toggleEnrolled(this.props.id); this.setState({open: false});}} open={this.props.enrolled}/>
        { this.state.open &&
        <div className="libary-course__description">
          <label>Course Description</label>
          <p>{this.props.description}</p>
        </div>
        }
      </div>
    );
  }
}
export default connect(null, actions)(LibraryCourse);
