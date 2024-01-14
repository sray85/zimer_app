import React from "react";
import "./mainPage.css";
import Gallery from "../Gallery/Gallery";
import OurZimers from "./../our_zimmer/OurZimers";
import MainPageHeader from "../Headers/MainPageHeader/mainpageheader";

const MainPage = () => {
  return (
    <div className="mainPage-con">
      <div className="gallery-con">
        <Gallery />
      </div>
      <div className="mainheader-con">
        <MainPageHeader />
      </div>
      <div className="ourZimmer-con">
        <OurZimers />
      </div>
    </div>
  );
};

export default MainPage;
