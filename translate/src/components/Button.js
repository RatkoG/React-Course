import React from "react";
import LanguageContext from "../contexts/LanguageContext";
class Button extends React.Component {
  render() {
    // console.log(this.context);
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Испрати")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
