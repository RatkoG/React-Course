import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    // console.log(this.props.fetchPosts);
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
export default connect(mapStateToProps, { fetchPosts })(PostList);
