import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageA" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
      </Routes>
    </div>
  );
}

export default App;
