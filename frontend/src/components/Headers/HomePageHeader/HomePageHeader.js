import React, { useEffect } from "react";
import { useState } from "react";
import "./HomePageHeader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HouseDownFill, MenuButtonWideFill } from "react-bootstrap-icons";
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
  }, [btnSelction, dispatch, open]);

  return (
    <div className="header-container">
      <h3>Wellcom To  Zimmeres</h3>
      <div className="navbar-con">
        <MenuButtonWideFill
          className="house-con"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        ></MenuButtonWideFill>
        <Collapse in={open} className="collapse-btn-con">
          <div>
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
