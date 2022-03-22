import React, { useState, useContext } from "react";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import PostContext from "../context/postContext";

export default function Home() {
  const [newData, setNewData] = useState({
    title: "",
    categories: "",
    content: "",
    like: false,
  });

  const { setPosts } = useContext(PostContext);
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
    setPosts((prevState) => [
      ...prevState,
      {
        ...newData,
        id: prevState.length,
      },
    ]);
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button style={{ width: "70px", marginRight: "5px" }}>
              Submit
            </button>
            <button onClick={() => navigate("/")} style={{ width: "70px" }}>
              Cancel
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
