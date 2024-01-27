import { useState } from "react";
import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { BoxArrowInRight, Person } from "react-bootstrap-icons";
import { adduser } from "../redux/userData";
import { useDispatch } from "react-redux";
import Loader from "./../loader/loader";

const LogIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginerror, setLoginError] = useState("");
  const [isLoder, setIsLoader] = useState(false);

  const dispatch = useDispatch();
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
            setIsLoader(true);
            await fetch("http://localhost:5000/login", Postdata)
              .then((response) => response.json())
              .then((data) => {
                setIsLoader(false);
                if (data.loginStatus) {
                  dispatch(adduser(data.userdata));
                  navigate("/mainpage");
                  ClearInputs();
                } else {
                  setLoginError(`${data.message} check user/password `);
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
      {isLoder ? <Loader /> : ""}
      <div className="loginInput-container">
        <div className="input-con">
          <Person fill="black" width={"30px"} height={"30px"} />
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
          <BoxArrowInRight fill="black" width={"30px"} height={"30px"} />
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
