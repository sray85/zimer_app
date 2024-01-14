import React, { useState } from "react";
import "./mainpageheader.css";
import { MenuUp, Search } from "react-bootstrap-icons";
import { searchFor } from "../../redux/searchOption";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";

const MainPageHeader = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.AllReducers.userdata.userdata);

  const LogOut = () => {
    navigate("/");
  };

  const AddZimmer = () => {
    navigate("/addzimmer");
  };

  dispatch(searchFor(search));

  return (
    <header className="mainPageHeader-con">
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
      <div>
        {userData.role === "admin" ? (
          <Button onClick={AddZimmer}>Add Zimmer</Button>
        ) : (
          ""
        )}
      </div>
      <div className="drop_container">
        <Dropdown>
          <Dropdown.Toggle className="btn-dark">
            <MenuUp style={{ width: 60, height: 30 }} />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-dark">
            <Dropdown.Item>My Profile</Dropdown.Item>
            <Dropdown.Item>My Resevation</Dropdown.Item>
            <Dropdown.Item onClick={LogOut}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};
export default MainPageHeader;
