import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhoneList from "./components/PhoneList";
import PhoneDetail from "./components/PhoneDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/phones/:id" element={<PhoneDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
