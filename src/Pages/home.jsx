import React, { useState, useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import PostContext from "../context/postContext";

export default function Home() {
  const { posts } = useContext(PostContext);
  const navigate = useNavigate();

  return (
    <>
      <header style={{ width: "100%" }}>
        <button
          onClick={() => navigate("/new")}
          style={{}}
          className="btn-post"
        >
          New Post
        </button>
      </header>

      <main>
        {posts.length > 0 ? (
          posts.map((item) => (
            <RouterLink to={`/${item.id}`} key={item.id} className="post">
              <p>{item.title}</p>
            </RouterLink>
          ))
        ) : (
          <p>No Post</p>
        )}
      </main>
    </>
  );
}
