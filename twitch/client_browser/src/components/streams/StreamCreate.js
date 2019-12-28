import React from "react";
//Field = Component
//reduxForm = Function
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps);

    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  }
  render() {
    // console.log(this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "StreamCreate"
})(StreamCreate);
