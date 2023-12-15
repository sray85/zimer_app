import { Routes, Route } from "react-router-dom";
import Nav from "../navbar/Nav";
import HomePage from "../home_page/HomePage";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </div>
  );
}
export default Router;
