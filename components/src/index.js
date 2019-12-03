import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          img={faker.image.avatar()}
          author="Sam"
          timeAgo="Today At 4:30PM"
          comment="Awesome!!!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          img={faker.image.avatar()}
          author="Alex"
          timeAgo="Dec 1 at 12AM"
          comment="Great Desk Setup!!!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          img={faker.image.avatar()}
          author="Zoran"
          timeAgo="Yesterday At 9AM"
          comment="Keep Going Ratko..."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
