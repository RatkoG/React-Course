import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 81ef353e9c204392060ad2dbfadc962a37c8451e8b4a5baf9eee999f8b3c6401"
        }
      })
      .then(response => {
        console.log(response.data.results);
      });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
