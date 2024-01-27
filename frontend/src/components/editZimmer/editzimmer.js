import React, { useRef, useState } from "react";
import "./editzimmer.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "./../loader/loader";

const EditZimmer = () => {
  const [msg, setMsg] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const nanigate = useNavigate();

  const location = useLocation();
  const zimmerData = location.state || null;

  const new_zimmerName = useRef(zimmerData.name);
  const new_zimmerDescription = useRef(zimmerData.description);
  const new_zimmerImg = useRef(zimmerData.img);
  const new_zimmerPrice = useRef(zimmerData.price);
  const zimmerid = zimmerData._id;

  const editZimmerInfo = () => {
    const zimmerData = {
      zimmerid,
      name: new_zimmerName.current.value,
      price: new_zimmerPrice.current.value,
      description: new_zimmerDescription.current.value,
      img: new_zimmerImg.current.value,
    };

    const PostTodata = {
      method: "POST",
      headers: {
        "Access-Control": "Allow-Origin",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zimmerData),
    };

    const fetching = async () => {
      setIsLoader(true);
      await fetch("http://localhost:5000/zimmer/editzimmer", PostTodata)
        .then((response) => response.json())
        .then((data) => {
          setIsLoader(false);
          console.log(data);
          setMsg(data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetching();
  };

  const BackToMainPage = () => {
    nanigate("/mainpage");
  };

  return (
    <div className="edit-zimmer-con">
      {isLoader ? <Loader /> : ""}
      <div className="edit-zimmer-inputs">
        <div className="inputs-con">
          <label>Zimmer Name: </label>
          <input
            type="text"
            defaultValue={zimmerData.name}
            ref={new_zimmerName}
            placeholder="zimer name"
          />
        </div>
        <div className="inputs-con">
          <label>Zimmer Description: </label>
          <textarea
            rows={3}
            cols={20}
            defaultValue={zimmerData.description}
            ref={new_zimmerDescription}
            placeholder="zimmer description"
          />
        </div>
        <div className="inputs-con">
          <label>Zimmer Price: </label>
          <input
            type="text"
            defaultValue={zimmerData.price}
            ref={new_zimmerPrice}
            placeholder="zimmer price"
          />
        </div>
        <div className="inputs-con">
          <label>Zimmer Image: </label>
          <input
            type="text"
            defaultValue={zimmerData.img}
            ref={new_zimmerImg}
            placeholder="zimmer img"
          />
        </div>
        <div className="button-container">
          <ButtonGroup>
            <button
              type="submit"
              className="btn btn-outline-info"
              onClick={editZimmerInfo}
            >
              Send
            </button>
            <button
              type="submit"
              className="btn btn-outline-info"
              onClick={BackToMainPage}
            >
              Back
            </button>
          </ButtonGroup>
        </div>
        <div className="msg-con">
          <label>{msg}</label>
        </div>
      </div>
    </div>
  );
};
export default EditZimmer;
