import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../action";
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    //This if statement is cause Title will be rendered a bit later
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
