import React, {Component} from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import LibraryCourse from "./libraryCourse";
class Library extends Component {
  componentWillMount(){
    this.props.fetchCourses();
  }
  renderCourses = () => {
    const data = this.props.courses;
    const filt = data.filter((c) => !c.enrolled );
    return filt.map((c,i) => <LibraryCourse {...c} key={i}/>).filter((c) => !c.enrolled);
  }
  render(){
    return(
      <div className="library">
        <div className="library__title">Library</div>
        { this.renderCourses() }
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps, actions)(Library);
