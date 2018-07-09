import React, {Component} from "react";
import Icon from "./icon";
class Action extends Component{
  handleAction = function(){
    this.props.onClick();
  }.bind(this);
  anim = function(){
    return (this.props.open) ? "action action-remove" : "action";
  }.bind(this);
  render(){
      return(
        <a id="action" onClick={ () => this.handleAction() }  className={`library-course__action ${this.anim()}`}>
        </a>
      );
  }
}
export default Action;
