import React, { useState } from "react";
import "./addzimmer.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/loader";

const AddZimmer = () => {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const nanigate = useNavigate();

  const AddZimmer = () => {
    if (
      name === "" ||
      description === "" ||
      price === "" ||
      img === "" ||
      region === ""
    ) {
      console.log("Some Zimmer Information Is Missing");
      setMsg("Some Zimmer Information Is Missing");
    } else {
      const zimmerData = {
        name,
        price,
        description,
        img,
        region,
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
        await fetch("http://localhost:5000/zimmer/addzimmerinfo", PostTodata)
          .then((response) => response.json())
          .then((data) => {
            setIsLoader(false);
            setMsg(data.message);
            ClearInputs();
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetching();
    }
  };

  const BackToMainPage = () => {
    nanigate("/mainpage");
  };

  const ClearInputs = () => {
    setDescription("");
    setImg("");
    setName("");
    setPrice("");
    setRegion("");
  };

  return (
    <div className="add-zimmer-con">
      {isLoader ? <Loader /> : ""}
      <div className="add-zimmer-inputs">
        <div className="inputs-con">
          <label>Zimmer Name: </label>
          <input
            type="text"
            onChange={(zn) => setName(zn.target.value)}
            value={name}
          />
        </div>
        <div className="inputs-con">
          <label>Zimmer Regio: </label>
          <input
            type="text"
            onChange={(zn) => setRegion(zn.target.value)}
            value={region}
          />
        </div>
        <div className="inputs-con">
          <label>Zimmer Description: </label>
          <textarea
            rows={3}
            cols={20}
            onChange={(zd) => setDescription(zd.target.value)}
            value={description}
          />
        </div>
        <div className="inputs-con">
          <label>Zimmer Price: </label>
          <input
            type="text"
            onChange={(zp) => setPrice(zp.target.value)}
            value={price}
          />
        </div>
        <div className="inputs-con">
          <label>Zimmer Image: </label>
          <input
            type="text"
            onChange={(zimg) => setImg(zimg.target.value)}
            value={img}
          />
        </div>
        <div className="button-container">
          <ButtonGroup>
            <button
              type="submit"
              className="btn btn-outline-info"
              onClick={AddZimmer}
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
export default AddZimmer;
