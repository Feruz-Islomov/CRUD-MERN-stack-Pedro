import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/mern");
    }
  }, [history]);

  const submitHandler = async (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/api/users/login", {
      email: email,
      password: password,
    })
      .then((data) => {
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        history.push("/mern");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={submitHandler}>
        <label>email adress</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email"
        />
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input type="submit" value="submit" />
        <hr />
        <p>
          New customer ? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
