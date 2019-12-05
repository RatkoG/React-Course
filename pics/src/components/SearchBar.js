import React from "react";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   event.preventDefault();
  //   console.log(event.target.value);
  // }
  render() {
    return (
      <div className="ui segment">
        <form action="/" className="ui form">
          <div className="field">
            <label htmlFor="/">Image Search</label>
            <input
              type="text"
              name=""
              id=""
              onChange={event => console.log(event.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
