import React, {Component} from "react";
import Icon from "./icon";
class Action extends Component{
  render(){
      return(
        <button onClick={() => this.props.onClick() } >
          {Icon("fas fa-plus-circle","library-course__action")}
        </button>
      );
  }
}
export default Action;
