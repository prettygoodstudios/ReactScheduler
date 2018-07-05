import React, {Component} from "react";
import LibraryCourse from "./libraryCourse";
class Library extends Component {
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
export default Library;
