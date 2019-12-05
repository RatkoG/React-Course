import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    event.preventDefault();
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form action="/" className="ui form">
          <div className="field">
            <label htmlFor="/">Image Search</label>
            <input type="text" name="" id="" onSubmit={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
