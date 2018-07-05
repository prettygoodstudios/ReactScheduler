import React, {Component} from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import LibraryCourse from "./libraryCourse";
class Library extends Component {
  componentDidMount(){
    this.props.fetchCourses();
  }
  render(){
    return(
      <div className="library">
        <div className="library__title">Library</div>
        <LibraryCourse />
        <LibraryCourse />
      </div>
    )
  }
}
export default connect(null, actions)(Library);
