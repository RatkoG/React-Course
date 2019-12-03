import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="Avatar" src={faker.image.avatar()} />
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
  );
};

export default CommentDetail;
