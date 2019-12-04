import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = {
      lat: null,
      errorMessage: ""
    };
    // Ova go premestivme. Za da ne se povikuva na sekoe od render ko che imame update na componento. Ednas e povikano i posle mozi render da se apdejtira kolku so saka pati...
    window.navigator.geolocation.getCurrentPosition(
      // console.log(position)
      position => {
        // We called setState
        this.setState({ lat: position.coords.latitude });
      },
      // console.log(err)
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  // React says we have to define render!!!
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
