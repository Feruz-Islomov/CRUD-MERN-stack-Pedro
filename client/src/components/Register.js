import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [message, setMessage] = useState(null);
  // const [picMessage, setPicMessage] = useState(null);
  const history = useHistory();
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     history.push("/mern");
  //   }
  // });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name);
    if (password !== confirmpassword) {
      setMessage("Password not matched");
    } else {
      setMessage(null);
      Axios.post("http://localhost:3001/api/users", {
        name: name,
        pic: pic,
        email: email,
        password: password,
      })
        .then((data) => {
          console.log(data);
          localStorage.setItem("userInfo", JSON.stringify(data));
          history.push("/mern");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter name"
        />
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
        <label>Confirm password</label>
        {message}
        <input
          type="password"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          placeholder="Confirm password"
        />
        <label>Profile Picture</label>
        <input
          type="file"
          // type="image/png"
          label="Upload profile picture"
          // custom
          onChange={(e) => setPic(e.target.files[0])}
        />
        <input type="submit" value="REGISTER" />
        <hr />
        <p>
          Have an account ? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
