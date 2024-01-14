import { Routes, Route } from "react-router-dom";
import HomePage from "../home_page/HomePage";
import OurZimers from "../our_zimmer/OurZimers";
import RateUs from "../rate_us/RateUs";
import Contact from "../contact_us/Contact";
import Gallery from "../Gallery/Gallery";
import MainPage from "./../mainPage/mainPage";
import AddZimmer from "./../addZimmer/addzimmer";
import EditZimmer from "../editZimmer/editzimmer";
import Reservation from "../reservation/reservation";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/ourzimmer" element={<OurZimers />} />
        <Route path="/rateus" element={<RateUs />} />
        <Route path="/conectus" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rateus" element={<RateUs />} />
        <Route path="/addzimmer" element={<AddZimmer />} />
        <Route path="/editzimmer" element={<EditZimmer />} />
        <Route path="/reservezimmer" element={<Reservation />} />
      </Routes>
    </div>
  );
}
export default Router;
