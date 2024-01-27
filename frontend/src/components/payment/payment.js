import React from "react";
import { useState } from "react";
import "./payment.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { SendFill, ArrowReturnRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../loader/loader";

const Payment = (props) => {
  const [holdername, setHolderName] = useState("");
  const [holderid, setHolderId] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [carddate, setCardDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentmsg, setPaymentMsg] = useState("");
  const [isLoder, setIsLoder] = useState(false);

  const startDate = props.startDate;
  const endDate = props.endDate;
  const amount = props.amount;
  const duration = props.duration;
  const zimmerData = props.zimmerdata;

  const navigate = useNavigate();
  const userData = useSelector((state) => state.AllReducers.userdata.userdata);

  const checkCreditCard = () => {
    if (!(cardnumber && carddate && cvv && holderid && holdername)) {
      setPaymentMsg("some payment unformation is missing");
    } else {
      let card_number = RegExp("^[0-9]{16}$");
      let card_date = RegExp("^(0[1-9]|1[0-2])/?([0-9]{2})(?=$|\\s)");
      let cvv_number = RegExp("^[0-9]{3}(?=$|\\s)");
      let card_holder_id = RegExp("^[0-9]{9}$");

      if (!card_number.test(cardnumber)) {
        setPaymentMsg("invalid credit card number");
      } else {
        if (!card_date.test(carddate)) {
          setPaymentMsg("invalid credit card date");
        } else {
          if (!cvv_number.test(cvv)) {
            setPaymentMsg("invalid credit card cvv number");
          } else {
            if (!card_holder_id) {
              setPaymentMsg("Invalid ID Number");
            } else {
              setPaymentMsg("Approval credit card");
              SendReservation();
            }
          }
        }
      }
    }
  };

  const SendReservation = () => {
    const zimmer = {
      zimmerId: zimmerData._id,
      zimmerName: zimmerData.name,
      zimmerUnitResevation: {
        clientName: userData.firstname + " " + userData.lastname,
        clientId: userData._id,
        zimmerPrice: zimmerData.price,
        duration,
        amount,
        startDate,
        endDate,
      },
    };

    const Postdata = {
      method: "POST",
      headers: {
        "Access-Control": "Allow-Origin",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zimmer),
    };
    const fetching = async () => {
      setIsLoder(true);
      await fetch("http://localhost:5000/zimmer/resevation", Postdata)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setIsLoder(false);
            setPaymentMsg(data.message);
            ClearInputs();
          }
        })
        .catch((error) => console.log(error));
    };
    fetching();
  };

  const BackToMainPage = () => {
    navigate("/mainpage");
  };

  const ClearInputs = () => {
    setHolderName("");
    setHolderId("");
    setCardDate("");
    setCardNumber("");
    setCvv("");
    setPaymentMsg("");
  };

  return (
    <div className="credit-card">
      {isLoder ? <Loader /> : ""}
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back">
          <div className="input-con">
            <label>Card Holder Name : </label>
            <input
              type={"text"}
              onChange={(e) => setHolderName(e.target.value)}
              placeholder="Card holder name"
              class="card-input"
              value={holdername}
            ></input>
          </div>
          <div className="input-con">
            <label>Card Holder ID : </label>
            <input
              type={"password"}
              onChange={(e) => setHolderId(e.target.value)}
              placeholder="Card holder ID"
              class="card-input"
              value={holderid}
            ></input>
          </div>
          <div className="input-con">
            <label>Card Number : </label>
            <input
              type={"password"}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Card Number"
              class="card-input"
              value={cardnumber}
            ></input>
          </div>
          <div className="input-con">
            <label>Card Validity : </label>
            <input
              type={"text"}
              onChange={(e) => setCardDate(e.target.value)}
              placeholder="MM/YY"
              class="card-input"
              value={carddate}
            ></input>
          </div>
          <div className="input-con">
            <label>Cvv Number : </label>
            <input
              type={"text"}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVC"
              class="card-input"
              value={cvv}
            ></input>
          </div>
          <div className="button-group">
            <ButtonGroup>
              <button
                onClick={checkCreditCard}
                className="btn btn-outline-info"
              >
                <SendFill />
                Send Order
              </button>
              <button onClick={BackToMainPage} className="btn btn-outline-info">
                <ArrowReturnRight /> Back
              </button>
            </ButtonGroup>
          </div>
          <div className="pymnt-msg">
            <label>{paymentmsg}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
