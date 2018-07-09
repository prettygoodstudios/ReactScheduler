import React, {Component} from "react";
import Icon from "./icon";
class Action extends Component{
  handleAction = function(){
    this.props.onClick();

    //document.getElementByID("action").
  }.bind(this);
  render(){
      return(
        <a id="action" onClick={ () => this.handleAction() }  className="library-course__action">
          {Icon("fas fa-plus-circle","library-course__action")}
        </a>
      );
  }
}
export default Action;
