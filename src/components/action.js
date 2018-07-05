import React, {Component} from "react";
import Icon from "./icon";
class Action extends Component{
  render(){
      return(
        <button onClick={() => this.props.onClick() }  className="library-course__action">
          {Icon("fas fa-plus-circle","library-course__action")}
        </button>
      );
  }
}
export default Action;
