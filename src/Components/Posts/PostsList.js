import React from "react";

import Post from "./Post";
import Card from "../UI/Card";
import "./PostsList.scss";

const PostsList = (props) => {
  return (
    <div className="posts-list">
      <Card>
        {props.posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </Card>
    </div>
  );
};

export default PostsList;
