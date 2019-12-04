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
  // componentDidMount() {
  //   console.log("My Component was rendered to the screen");
  // }
  // componentDidUpdate() {
  //   console.log("My component was just updated - it rerendered!");
  // }

  // React says we have to define render!!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
