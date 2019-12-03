import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="Avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Natali
          </a>
          <div className="metadata">
            <span className="date">Today at 7AM</span>
          </div>
          <div className="text">Nice Setup Ratko</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
