import React, { useState, useEffect, useCallback } from "react";

import "./App.css";
import loadBar from "./Assets/LoadBar.gif";
import PostsList from "./Components/Posts/PostsList";
import Button from "./Components/UI/Button";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPostsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-http-11a5d-default-rtdb.firebaseio.com/posts.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong D:");
      }

      const data = await response.json();

      const loadedPosts = [];

      for (const key in data) {
        loadedPosts.push({
          id: key,
          title: data[key].title,
          body: data[key].body,
        });
      }
      setPosts(loadedPosts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPostsHandler();
  }, [fetchPostsHandler]);

  let content = <p>No posts found.</p>;

  if (posts.length > 0) {
    content = <PostsList posts={posts} />;
  }

  return (
    <div id="App">
      {isLoading && <img src={loadBar} alt="loading bar" />}
      {error && <h2>{error}</h2>}
      <section>
        <Button className="load-btn">Load posts</Button>
      </section>
      <section>{content}</section>
    </div>
  );
}
