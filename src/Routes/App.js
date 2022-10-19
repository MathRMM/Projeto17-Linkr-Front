import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Context from "../Context";
import Timeline from "../Pages/Timeline";
import UsersPage from "../Pages/UsersPage";


export default function App() {
  return (
    <Context.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/user/:id" element={<UsersPage/>} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
