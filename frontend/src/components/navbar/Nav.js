import React, { useState } from "react";
import OurZimers from "../our_zimmer/OurZimers";
import Gallery from "../gallery/Gallery";
import Contact from "../contact_us/Contact";
import RateUs from "../rate_us/RateUs";
import Router from "../router/router";
import { useNavigate } from "react-router-dom";
// import SignUp from "../signup/signup";
// import LogIn from "../login/login";

const images = [
  "https://my.weekend.co.il/Templates/customerimages/20524/gallery/image_20524_6be150a25cfb4f5fa11648fce41314f1.jpg",
  "https://my.weekend.co.il/Templates/customerimages/20524/gallery/image_20524_6219b79ab8fb494fac8f3861d2cc6a00.jpg",
  "https://zimmers-at-the-forest-villa-amirim.booked.co.il/data/Photos/OriginalPhoto/7767/776740/776740612/Zimmers-At-The-Forest-Amirim-Exterior.JPEG",
  // Add more image URLs here
];

const SourceComponent = ({ setIsNavOpen, setContent }) => {
  const handlePageClick = (buttonId) => {
    setIsNavOpen(false);

    switch (buttonId) {
      case "our_zimers":
        setContent(
          <span className="our_zimers">
            <OurZimers />
          </span>
        );
        break;

      case "gallery":
        setContent(
          <span className="gallery">
            <Gallery images={images} />
          </span>
        );
        break;

      case "contact":
        setContent(
          <span className="contact">
            <Contact />
          </span>
        );
        break;

      case "rate_us":
        setContent(
          <span>
            <RateUs />
          </span>
        );
        break;
      default:
        setContent(null);
        break;
    }
  };

  return (
    <nav className="nav">
      <button
        id="our_zimers"
        className="btn_ul"
        onClick={() => handlePageClick("our_zimers")}
      >
        Our Zimers
      </button>
      <button
        id="gallery"
        className="btn_ul"
        onClick={() => handlePageClick("gallery")}
      >
        Gallery
      </button>
      <button
        id="contact"
        className="btn_ul"
        onClick={() => handlePageClick("contact")}
      >
        Contact
      </button>
      <button
        id="rate_us"
        className="btn_ul"
        onClick={() => handlePageClick("rate_us")}
      >
        Rate Us
      </button>
    </nav>
  );
};

const Nav = ({ setActivePage }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [content, setContent] = useState(null);
  const navigte = useNavigate();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <span>
      <button className="menu_btn" onClick={handleNavToggle}>
        Menu
      </button>
      <button
        className="menu_btn"
        onClick={() => {
          navigte("/");
        }}
      >
        Logout
      </button>

      {isNavOpen && (
        <SourceComponent setIsNavOpen={setIsNavOpen} setContent={setContent} />
      )}
      {content}
    </span>
  );
};

export default Nav;
