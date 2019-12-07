import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment search-bar">
        <form action="#" className="ui form">
          <div className="field">
            <label htmlFor="#">Video Search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
