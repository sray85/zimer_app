import { useState } from "react";
import React from "react";
import "./login.css";
import Nav from "../navbar/Nav";
import HomePage from "../home_page/HomePage";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginerror, setLoginError] = useState("");

  const navigate = useNavigate();

  const LoginTo = () => {
    if (username === "" && password === "") {
      setLoginError("user name/password is missing");
    } else {
      if (username === "") {
        setLoginError("user name is missing");
      } else {
        if (password === "" || null) {
          setLoginError("password is missing");
        } else {
          const loginData = {
            username,
            password,
          };
          const Postdata = {
            method: "POST",
            headers: {
              "Access-Control": "Allow-Origin",
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          };
          const fetching = async () => {
            await fetch("http://localhost:5000/login", Postdata)
              .then((response) => response.json())
              .then((data) => {
                if (data.login_status) {
                  navigate("/nav");
                  ClearInputs();
                } else {
                  setLoginError(data.message);
                }
              })
              .catch((error) => console.log(error));
          };
          fetching();
        }
      }
    }
  };

  const ClearInputs = () => {
    setUserName("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="loginInput-container">
        <div className="input-con">
          <label>User Name :</label>
          <input
            type="email"
            required
            value={username}
            onChange={(nme) => setUserName(nme.target.value)}
            className="form-control"
            placeholder="mail"
            style={{ textAlign: "center" }}
          />
        </div>
        <div className="input-con">
          <label>Password :</label>
          <input
            type="password"
            required
            value={password}
            onChange={(pwrd) => setPassword(pwrd.target.value)}
            className="form-control"
            placeholder="password"
            style={{ textAlign: "center" }}
          />
        </div>
      </div>
      <div className="login-buttons-container">
        <div className="button-con">
          <button type="submit" className="button" onClick={LoginTo}>
            login
          </button>
        </div>
      </div>
      <div>
        <h5>{loginerror}</h5>
      </div>
    </div>
  );
};
export default LogIn;
