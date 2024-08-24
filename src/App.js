import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import CardFlip from "./components/CardFlip";
import ChatPage from "./pages/ChatPage";
import Canvas from "./pages/Canvas";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageA" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
        <Route path="/chatPage" element={<ChatPage />} />
        <Route path="/cardFlip" element={<CardFlip />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </div>
  );
}

export default App;
