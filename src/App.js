import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import New from "./Pages/new";
import Post from "./Pages/post";
import EditPost from "./Pages/editPost";
import PostContext from "./context/postContext";
// import ./App

export default function App() {
  const [posts, setPosts] = useState([]);
  return (
    // <Home />
    <PostContext.Provider value={{ posts, setPosts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new" element={<New />} />
          <Route path=":postdetails" element={<Post />} />
          <Route path="edit-post/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}
// export default App;
