import Card from "../UI/Card";
import "./Post.scss";

const Post = (props) => {
  return (
    <Card className="post">
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </Card>
  );
};

export default Post;
