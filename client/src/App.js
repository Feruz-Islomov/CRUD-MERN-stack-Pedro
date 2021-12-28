// import { useEffect, useState } from "react";
import "./App.css";
import Mymern from "./components/myMern";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Sounding from "./components/Sounding";
import ProtectedRoute from "./ProtectedRoute";

import useAuth from "./useAuth";
import Soundingf from "./components/Soundingf";
import SoundFunc from "./components/SoundFunc";
// import Axios from "axios";

function App() {
  const [isAuth, login, logout] = useAuth(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Soundingf />
        <Sounding />
        <ul>
          <Link to="/">
            <li>Landing page (not protected)</li>
          </Link>
          <Link to="/login">
            <li>Login page</li>
          </Link>
          <Link to="/register">
            <li>Register page</li>
          </Link>
          <Link to="/mern">
            <li>MyMern page (protected)</li>
          </Link>
        </ul>
        {isAuth ? (
          <>
            <h1>You are logged in...</h1>
            <button onClick={logout}>logout</button>
          </>
        ) : (
          <>
            <h1>You are logged out</h1>
            <button onClick={login}>login</button>
          </>
        )}
        <Route path="/play" exact component={SoundFunc} />
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/mern" component={Mymern} auth={isAuth} />
      </BrowserRouter>
    </div>
  );
}

export default App;
