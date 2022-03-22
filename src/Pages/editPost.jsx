import React, { useState, useContext } from "react";

import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import PostContext from "../context/postContext";

export default function EditPost() {
  const { id } = useParams();
  const { posts, setPosts } = useContext(PostContext);
  const [newData, setNewData] = useState({
    ...posts[id],
  });

  //   const { setPosts } = useContext(PostContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setNewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPosts((prevState) => {
      prevState[id] = { ...newData };
      return [...prevState];
    });
    setNewData({
      title: "",
      categories: "",
      content: "",
      like: false,
    });
  }
  return (
    <>
      <header>
        <div>
          <button onClick={() => navigate("/")} className="btn-post">
            back to index
          </button>
        </div>
      </header>

      <main>
        <form
          onSubmit={handleSubmit}
          className="form-post"
          style={{
            display: "flex",
            alignItem: "flex-start",
            flexDirection: "column",
          }}
        >
          <label htmlFor="title">Title</label>
          <input
            style={{ height: "25px", marginBottom: "10px", marginTop: "2px" }}
            id="title"
            name="title"
            value={newData.title}
            placeholder="title"
            onChange={handleChange}
          />
          <label htmlFor="categories">Categories</label>
          <input
            style={{ height: "25px", marginBottom: "10px", marginTop: "2px" }}
            id="categories"
            name="categories"
            value={newData.categories}
            placeholder="categories..."
            onChange={handleChange}
          />
          <label htmlFor="content">Content</label>
          <textarea
            style={{ height: "100px", marginBottom: "10px", marginTop: "2px" }}
            id="content"
            name="content"
            value={newData.content}
            placeholder="content..."
            onChange={handleChange}
          />

          <button>Submit</button>
        </form>
      </main>
    </>
  );
}
