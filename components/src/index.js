import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        img={faker.image.avatar()}
        author="Sam"
        timeAgo="Today At 4:30PM"
        comment="Awesome!!!"
      />
      <CommentDetail
        img={faker.image.avatar()}
        author="Alex"
        timeAgo="Dec 1 at 12AM"
        comment="Great Desk Setup!!!"
      />
      <CommentDetail
        img={faker.image.avatar()}
        author="Zoran"
        timeAgo="Yesterday At 9AM"
        comment="Keep Going Ratko..."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
