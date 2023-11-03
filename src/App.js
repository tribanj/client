import "./App.css";
import { useState } from "react";
import HomePage from "./components/homepage/HomePage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              user && user._id ? (
                <HomePage />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
