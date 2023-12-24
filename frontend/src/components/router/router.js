import { Routes, Route } from "react-router-dom";
import Nav from "../navbar/Nav";
import HomePage from "../home_page/HomePage";
import Gallery from "../gallery/Gallery";
import OurZimers from "../our_zimmer/OurZimers";
import RateUs from "../rate_us/RateUs";
import Contact from "../contact_us/Contact";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ourzimmer" element={<OurZimers />} />
        <Route path="/rateus" element={<RateUs />} />
        <Route path="/conectus" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default Router;
