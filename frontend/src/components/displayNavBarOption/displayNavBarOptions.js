import "./displayNavBarOptions.css";
import { useEffect, useState } from "react";
import LogIn from "./../login/login";
import SignUp from "./../signup/signup";
import OurZimers from "./../our_zimmer/OurZimers";
import Contact from "./../contact_us/Contact";
import { useSelector } from "react-redux";

function DisplayNavBarOption() {
  const [pagedisplay, setPageDisplay] = useState("");

  const btnSelction = useSelector(
    (state) => state.AllReducers.btnSelecttion.btnNavBar
  );

  useEffect(() => {
    switch (btnSelction) {
      case "login":
        setPageDisplay(<LogIn />);
        break;
      case "signup":
        setPageDisplay(<SignUp />);
        break;
      case "our_zimers":
        setPageDisplay(<OurZimers />);
        break;
      case "contact":
        setPageDisplay(<Contact />);
        break;
      case "none":
        setPageDisplay(null);
        break;
      default:
        setPageDisplay(null);
        break;
    }
  }, [btnSelction]);

  return (
    <div>
      <div className="main-display-con">
        <div>{pagedisplay}</div>
      </div>
    </div>
  );
}
export default DisplayNavBarOption;
