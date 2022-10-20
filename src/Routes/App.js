import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Timeline from "../Pages/Timeline";
import Context from "../Context";
import ModalTimeline from "../Components/Modal/Modal";

export default function App() {
  return (
    <Context.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/Delete" element={<ModalTimeline />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
