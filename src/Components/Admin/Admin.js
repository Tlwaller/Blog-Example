import { useRef } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "./Admin.scss";

const Admin = (props) => {
  const titleRef = useRef("");
  const bodyRef = useRef("");

  async function submitHandler(e) {
    e.preventDefault();

    const post = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };

    const response = await fetch(
      "https://react-http-11a5d-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  return (
    <div id="admin">
      <Card>
        <form className="admin-form" onSubmit={submitHandler}>
          <label htmlFor="title">
            Title:
            <input type="text" id="title" ref={titleRef} />
          </label>

          <label htmlFor="body">
            Body:
            <textarea rows="5" id="body" ref={bodyRef} />
          </label>
          <Button>Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default Admin;
