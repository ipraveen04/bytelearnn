import React, { useState, useContext } from "react";
import PostContext from "../context/postContext";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const { postdetails } = useParams();
  console.log(postdetails);
  const { posts, setPosts } = useContext(PostContext);
  const navigate = useNavigate();

  function handleLike() {
    setPosts((prevState) => {
      console.log(prevState[postdetails].like);
      prevState[postdetails] = {
        ...prevState[postdetails],
        like: prevState[postdetails].like ? false : true,
      };
      return [...prevState];
    });
  }

  console.log(posts);

  function handleEdit() {
    navigate(`/edit-post/${postdetails}`);
  }

  function handleDelete() {
    setPosts((prevState) => [
      ...prevState.filter((item) => item.id != postdetails),
    ]);
    navigate("/");
  }

  return (
    <>
    {/*  */}
      <header
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button className="para-post" onClick={() => navigate("/")}>
            back to index
          </button>
        </div>
        <div
          className=""
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            width: "150px",
          }}
        >
          <div>
            <button
              onClick={handleLike}
              style={{ background: posts[postdetails].like ? "red" : "white" }}
            >
              Like
            </button>
          </div>
          <div>
            <button onClick={handleEdit}>Edit</button>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </header>

      <main>
        <div className="post">
          <p>{posts[postdetails].content}</p>
        </div>
      </main>
    </>
  );
}
