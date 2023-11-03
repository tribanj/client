import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async() => {
    // const { name, email, password, reEnterPassword } = user;
    // if (name && email && password && password === reEnterPassword) {
    //     axios.post("", user)
    //     .then((res) => {
    //       console.log(res.response.data, "res");
    //     //   navigate('/login');
    //     // alert("Request failed with status code " + res.response);
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    // }

    const data = await fetch(`http://localhost:5000/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    const res = await data.json();
    console.log(res)
    alert(res.message)
  };

  return (
    <>
      <div className="register">
        {console.log("User", user)}
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <div className="button" onClick={register}>
          Register
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/login")}>Login</div>
      </div>
    </>
  );
};

export default Register;
