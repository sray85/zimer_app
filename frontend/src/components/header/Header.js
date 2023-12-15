import React from "react";
import { useState } from "react";
import LogIn from "../login/login";
import SignUp from "../signup/signup";
import "./header.css";

const Header = (props) => {
  const [content, setContent] = useState(null);

  const handlePageClick = (buttonId) => {
    switch (buttonId) {
      case "login":
        setContent(
          <span className="login">
            <LogIn />
          </span>
        );
        break;

      case "signup":
        setContent(
          <span className="signup">
            <SignUp />
          </span>
        );
        break;
      default:
        setContent(null);
        break;
    }
  };

  return (
    
    <div className="header-container">
      <button
        id="login"
        className="btn_ul"
        onClick={() => handlePageClick("login")}
      >
        Login
      </button>

      <h1 className={props.className}>ZIMER</h1>

      <button
        id="signup"
        className="btn_ul"
        onClick={() => handlePageClick("signup")}
      >
        Signup
      </button>
      {content}
    </div>
  );
};

export default Header;
