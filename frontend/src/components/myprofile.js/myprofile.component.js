import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import {
  EnvelopeAt,
  FilePerson,
  PersonCircle,
  PhoneFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import "./myprofile.component.css";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const userData = useSelector((state) => state.AllReducers.userdata.userdata);
  const navigate = useNavigate();
  const backTOMainPage = () => {
    navigate("/mainpage");
  };

  return (
    <div className="main-profile-con">
      <Card>
        <Card.Header>
          <Card.Title>
            <PersonCircle />
            My Profile
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <FilePerson />
            First Name : {userData.firstname}
          </Card.Text>
          <Card.Text>
            <FilePerson />
            Last Name :{userData.lastname}
          </Card.Text>
          <Card.Text>
            <PhoneFill />
            Phone Number :{userData.phonenumber}
          </Card.Text>
          <Card.Text>
            <EnvelopeAt />
            Mail : {userData.email}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            {/* <Button>Edit</Button> */}
            <Button onClick={backTOMainPage}>Main Page</Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </div>
  );
};
export default MyProfile;
