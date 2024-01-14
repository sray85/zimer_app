import { useState } from "react";
import "./signup.css";
import React from "react";
import Loader from "../loader/loader";


const SignUp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phonenumber, setPhoneNumber] = useState(0);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [passworerror, setPasswordError] = useState("");
  const [mailerror, setMailError] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoader, setIsLoader] = useState(false);


  const SignUpValidation = () => {
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );
    if (!emailRegex.test(mail)) {
      setMailError("Mail must meet the specified criteria.");
    } else {
      setMailError("");
    }

    const passwordRegex = new RegExp(/^(?!.*[#!])(?=.*[A-Z])(?=.*[0-9]).{8,}$/);
    if (!passwordRegex.test(password)) {
      setPasswordError("Password must meet the specified criteria.");
    } else {
      setPasswordError("");
      ToSignUp();
    }
  };

  const ToSignUp = () => {
    const signupData = {
      fname,
      lname,
      phonenumber,
      mail,
      password,
      repassword,
    };

    const Postdata = {
      method: "POST",
      headers: {
        "Access-Control": "Allow-Origin, ",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    };
    const fetching = async () => {
      setIsLoader(true);
      await fetch("http://localhost:5000/signup", Postdata)
        .then((response) => response.json())
        .then((data) => {
          setIsLoader(false);
          if (data.signup_status) {
            clearInputs();
            setIsLoader(false);
          } else {
            setMsg(data.message);
          }
        })
        .catch((error) => {
          console.log(error)
        });
    };
    fetching();
  };

  const clearInputs = () => {
    setFname("");
    setLname("");
    setMail("");
    setPassword("");
    setRePassword("");
    setPhoneNumber("");
    setMsg("");
  };

  return (
    <div className="main-signup-container">
      {isLoader ? <Loader /> : ""}
      <div className="signinInput-container">
        <div className="input-con">
          <label>First Name : </label>
          <input
            type="text"
            value={fname}
            onChange={(f_name) => setFname(f_name.target.value)}
            className="form-control"
            placeholder="first name"
          />
        </div>
        <div className="input-con">
          <label>Last Name : </label>
          <input
            type="text"
            value={lname}
            onChange={(l_name) => setLname(l_name.target.value)}
            className="form-control"
            placeholder="last name"
          />
        </div>
        <div className="input-con">
          <label>Phone Number : </label>
          <input
            type="tel"
            value={phonenumber}
            onChange={(p_number) => setPhoneNumber(p_number.target.value)}
            className="form-control"
            placeholder="phone number"
          />
        </div>
        <div className="input-con">
          <label>Mail :</label>
          <input
            type="email"
            value={mail}
            onChange={(email) => setMail(email.target.value)}
            className="form-control"
            placeholder="mail address"
          />
        </div>
        <div className="input-con">
          <label>Password :</label>
          <input
            type="password"
            value={password}
            onChange={(passwrd) => setPassword(passwrd.target.value)}
            className="form-control"
            placeholder="at least 8 digits"
          />
        </div>
        <div className="input-con">
          <label>Re-Enter Password :</label>
          <input
            type="password"
            value={repassword}
            onChange={(rpasswrd) => setRePassword(rpasswrd.target.value)}
            className="form-control"
            placeholder="re-enter password"
          />
        </div>
      </div>
      <div className="buttons-container">
        <button type="button" className="button" onClick={SignUpValidation}>
          Submit
        </button>
      </div>
      <div>
        <h5>{mailerror}</h5>
        <h5>{passworerror}</h5>
        <h5>{msg}</h5>
      </div>
    </div>
  );
};
export default SignUp;
