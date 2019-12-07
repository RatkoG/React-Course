import React from "react";

class SearchBar extends React.Component {
  state = { myInput: "" };
  onInputChange = e => this.setState({ myInput: e.target.value });

  onFormSubmit = e => {
    e.preventDefault();
    // console.log(this.state.myInput);
    this.props.onFormSubmit(this.state.myInput);
  };
  render() {
    // console.log(this.state.myInput);
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} action="#" className="ui form">
          <div className="field">
            <label htmlFor="#">Video Search</label>
            <input
              type="text"
              value={this.state.myInput}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
