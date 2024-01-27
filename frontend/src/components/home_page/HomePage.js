import "./HomePage.css";
import HomePageHeader from "../Headers/HomePageHeader/HomePageHeader";
import DisplayNavBarOption from "../displayNavBarOption/displayNavBarOptions";
import { useSelector } from "react-redux";
import AboutUs from "../aboutUs/aboutus.component";

const HomePage = () => {
  const btnSelection = useSelector(
    (state) => state.AllReducers.btnSelecttion.btnNavBar
  );
  return (
    <div className="homepage-contanier">
      <div>
        <HomePageHeader />
      </div>
      <div style={{ margin: "40px 0" }}>
        <DisplayNavBarOption />
      </div>
      {btnSelection === "none" ? (
        <div>
          <AboutUs />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
