import React from "react";
import { useState } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HouseDownFill } from "react-bootstrap-icons";
import { Collapse } from "react-bootstrap";
import HomePage from "../home_page/HomePage";

const HomePageHeader = () => {
  const [content, setContent] = useState(null);
  const [open, setOpen] = useState(false);

  // const HandlingBtnSelection = (btnSelction) => {
  //   switch (btnSelction) {
  //     case "login":
  //       setContent(<LogIn />);
  //       break;
  //     case "signup":
  //       setContent(<SignUp />);
  //       break;
  //     case "our_zimers":
  //       setContent(<OurZimers />);
  //       break;
  //     case "gallery":
  //       setContent(<Gallery />);
  //       break;
  //     case "contact":
  //       setContent(<Contact />);
  //       break;
  //     case "rate_us":
  //       setContent(<RateUs />);
  //       break;

  //     default:
  //       setContent(null);
  //       break;
  //   }
  // };

  return (
    <div className="header-container">
      <h3>Wellcom To Aiman's Zimmeres</h3>
      <div className="navbar-con">
        <HouseDownFill
          className="house-con"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        ></HouseDownFill>
        <Collapse in={open} className="collapse-btn-con">
          <div>
            <button
              id="our_zimers"
              className="nav-btn"
              onClick={() => setContent("our_zimers")}
            >
              Our Zimers
            </button>
            <button
              id="gallery"
              className="nav-btn"
              // onClick={() => HandlingBtnSelection("gallery")}
            >
              Gallery
            </button>
            <button
              id="contact"
              className="nav-btn"
              // onClick={() => HandlingBtnSelection("contact")}
            >
              Contact
            </button>
            <button
              id="rate_us"
              className="nav-btn"
              // onClick={() => HandlingBtnSelection("rate_us")}
            >
              Rate Us
            </button>
            <button
              id="signup"
              className="nav-btn"
              // onClick={() => HandlingBtnSelection("signup")}
            >
              SignUP
            </button>
            <button
              id="login"
              className="nav-btn"
              // onClick={() => HandlingBtnSelection("login")}
            >
              Login
            </button>
          </div>
        </Collapse>
      </div>
      <HomePage btnSelction={content} />
    </div>
  );
};

export default HomePageHeader;
