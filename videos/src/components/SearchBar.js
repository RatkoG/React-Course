import React from "react";

class SearchBar extends React.Component {
  state = { myInput: "" };
  onInputChange = e => this.setState({ myInput: e.target.value });
  render() {
    console.log(this.state.myInput);
    return (
      <div className="ui segment search-bar">
        <form action="#" className="ui form">
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
