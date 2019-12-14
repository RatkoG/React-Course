import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    // console.log(this.props.fetchPosts);
  }
  render() {
    // Ovde che imame
    console.log(this.props.posts);

    // console.log("I was triggered during render");
    return <div>Post List</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
// NULL e oti sega zasega nemame mapStateToProps
export default connect(mapStateToProps, { fetchPosts })(PostList);
