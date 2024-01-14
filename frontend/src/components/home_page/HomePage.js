import "./HomePage.css";
import HomePageHeader from "../Headers/HomePageHeader/HomePageHeader";
import DisplayNavBarOption from "../displayNavBarOption/displayNavBarOptions";

const HomePage = () => {
  return (
    <div className="homepage-contanier">
      <div>
        <HomePageHeader />
      </div>
      <div style={{ margin: "40px 0" }}>
        <DisplayNavBarOption />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default HomePage;
