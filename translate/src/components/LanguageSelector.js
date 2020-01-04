import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english")}
        />
        <i
          className="flag mk"
          onClick={() => this.props.onLanguageChange("macedonian")}
        />
      </div>
    );
  }
}
export default LanguageSelector;
