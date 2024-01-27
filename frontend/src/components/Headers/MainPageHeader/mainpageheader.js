import React, { useState } from "react";
import "./mainpageheader.css";
import { List, Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { searchFor } from "../../redux/searchOption";
import { adduser } from "../../redux/userData";

const MainPageHeader = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  dispatch(searchFor(search));

  const navigate = useNavigate();

  const userData = useSelector((state) => state.AllReducers.userdata.userdata);

  const LogOut = () => {
    navigate("/");
    dispatch(adduser(""));
    localStorage.removeItem("persist:zimmerApp");
  };

  const AddZimmer = () => {
    navigate("/addzimmer");
  };

  const ToMyProFile = () => {
    navigate("/myprofile");
  };

  const Resevations = () => {
    navigate("/ZimmerResevations");
  };

  function submitSelection() {
    const selection = document.getElementById("selectOption").value;
    if (selection === "all regions") {
      setSearch("");
    } else {
      setSearch(selection);
    }
  }

  return (
    <header className="mainPageHeader-con">
      <div className="selection-con">
        <label>Region : </label>
        <select
          aria-labelledby="regionSelection"
          id="selectOption"
          onChange={submitSelection}
        >
          <option value={"all regions"}>Select Region</option>
          <option value={"south"}>South</option>
          <option value={"north"}>North</option>
          <option value={"center"}>Center</option>
        </select>
      </div>
      <div className="name-container">
        <h4>Wellcom: {userData.firstname + " " + userData.lastname}</h4>
      </div>
      <div className="search-con">
        <input
          type="search"
          placeholder="search"
          className="search-input-con"
          onChange={(srch) => setSearch(srch.target.value)}
        />
        <Search style={{ height: 40, width: 50, color: "green" }} />
      </div>
      <div className="drop_container">
        <Dropdown>
          <Dropdown.Toggle>
            <List style={{ width: 60, height: 30 }} />
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userData.role === "admin" ? (
              <div>
                <Dropdown.Item onClick={AddZimmer}>Add Zimmer</Dropdown.Item>
                <Dropdown.Item onClick={Resevations}>Resevations</Dropdown.Item>
              </div>
            ) : (
              ""
            )}
            <Dropdown.Item onClick={ToMyProFile}>My Profile</Dropdown.Item>
            <Dropdown.Item onClick={LogOut}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};
export default MainPageHeader;
