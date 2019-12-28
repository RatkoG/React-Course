import React from "react";
//Field = Component
//reduxForm = Function
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // console.log(formProps);

    return (
      <div className="field">
        <label htmlFor="">{label}</label>
        <input {...input} />
      </div>
    );
  }
  render() {
    // console.log(this.props);
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "StreamCreate"
})(StreamCreate);
