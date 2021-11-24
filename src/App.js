import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
