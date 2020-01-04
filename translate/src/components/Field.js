import React from "react";
import LanguageContext from "../contexts/LanguageContext";
class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "Name" : "Ime";
    return (
      <div className="ui field">
        <label htmlFor="">{text}</label>
        <input type="text" name="" id="" />
      </div>
    );
  }
}

export default Field;
