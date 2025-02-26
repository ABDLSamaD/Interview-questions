import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MongoDB from "./Pages/MongoDB";
import Express from "./Pages/Express";
import React from "./Pages/React";
import Node from "./Pages/Node";
import Navbar from "./Components/Navbar";
import Complex from "./Pages/Complex";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto p-2">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/mongodb" element={<MongoDB />} />
            <Route path="/express" element={<Express />} />
            <Route path="/react" element={<React />} />
            <Route path="/node" element={<Node />} />
            <Route path="/complex" element={<Complex />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
