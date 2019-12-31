import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../action";
import StreamForm from "./StreamForm";
import { formValues } from "redux-form";
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    console.log(this.props);
    //This if statement is cause Title will be rendered a bit later
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={this.props.stream}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
