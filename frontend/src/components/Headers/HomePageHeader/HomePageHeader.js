import React, { useEffect } from "react";
import { useState } from "react";
import "./HomePageHeader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuUp } from "react-bootstrap-icons";
import { Collapse } from "react-bootstrap";
import { addBtnSelction } from "../../redux/navbarOption";
import { useDispatch } from "react-redux";

const HomePageHeader = () => {
  const [btnSelction, setBtnSelection] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!open) {
      setBtnSelection("none");
      dispatch(addBtnSelction("none"));
    } else {
      dispatch(addBtnSelction(btnSelction));
    }
  }, [btnSelction, open, dispatch]);

  return (
    <div className="header-container">
      <h3>Wellcom To Aiman's Zimmeres</h3>
      <div className="navbar-con">
        <MenuUp
          className="house-con"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        ></MenuUp>
        <Collapse in={open}>
          <div className="collapse-btn-con">
            <button
              id="our_zimers"
              className="nav-btn"
              onClick={() => setBtnSelection("our_zimers")}
            >
              Our Zimers
            </button>
            <button
              id="contact"
              className="nav-btn"
              onClick={() => setBtnSelection("contact")}
            >
              Contact
            </button>
            <button
              id="signup"
              className="nav-btn"
              onClick={() => setBtnSelection("signup")}
            >
              SignUP
            </button>
            <button
              id="login"
              className="nav-btn"
              onClick={() => setBtnSelection("login")}
            >
              Login
            </button>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default HomePageHeader;

//  <button
// id="rate_us"
// className="nav-btn"
// onClick={() => setBtnSelection("rate_us")}
// >
// Rate Us
// </button>
