import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
    // console.log(this.props.fetchPosts, "OVA E TO");
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.title}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    // Ovde che imame
    console.log(this.props.posts);

    // console.log("I was triggered during render");
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
// NULL e oti sega zasega nemame mapStateToProps
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
