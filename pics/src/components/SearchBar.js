import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

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
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
