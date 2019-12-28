import React from "react";
//Field = Component
//reduxForm = Function
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    // console.log(formProps);
    // console.log(meta);

    return (
      <div className="field">
        <label htmlFor="">{label}</label>
        <input {...input} autoComplete="off" />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    //Ne ni treba ova vo redux
    // event.preventDefault();
    console.log(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  //Ovie so se vo error primer title ili description se povrzuva so name vo Field gore...
  if (!formValues.title) {
    //only ran if the user did not enter a title
    errors.title = "Please enter a title";
  }
  if (!formValues.description) {
    errors.description = "Please enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "StreamCreate",
  validate
})(StreamCreate);
