import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    // console.log(this.props.fetchPosts);
  }
  render() {
    // console.log("I was triggered during render");
    return <div>Post List</div>;
  }
}
// NULL e oti sega zasega nemame mapStateToProps
export default connect(null, { fetchPosts })(PostList);
