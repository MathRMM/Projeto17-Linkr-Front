import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Timeline from "../Pages/Timeline";
import Context from "../Context";
export default function App() {
  return (
    <Context.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Timeline />} />
          
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
