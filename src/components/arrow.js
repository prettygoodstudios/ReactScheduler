import React, {Component} from "react";
class Arrow extends Component{
  constructor(props){
    super(props);
    this.state = {
      style: "arrow"
    }
  }
  condition = function() {
    return (this.props.open) ? "arrow" : "arrow-closed";
  }.bind(this);
  render(){
      return(
        <a className={`${this.props.className} ${this.condition()}`} onClick={() => this.props.onClick()}></a>
      );
  }
}
export default Arrow;
