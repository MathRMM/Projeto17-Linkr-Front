import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Context from "../Context";
import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/Login/SignUp";
import Timeline from "../Pages/Timeline";
import UsersPage from "../Pages/UsersPage";
import PostTag from "../Components/Posts/PostTag";

const userObj = {
  username: localStorage.getItem("username") ?? "",
  image: localStorage.getItem("image") ?? "",
  token: localStorage.getItem("token") ?? "",
};

export default function App() {
  const [user, setUser] = useState(userObj);

  return (
    <Context.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/user/:id" element={<UsersPage />} />
          <Route path="/hashtag/:hashtag" element={<PostTag />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
