import React from "react";
import { useState } from "react";
import "./payment.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { SendFill, ArrowReturnRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../loader/loader";
import { addresevation } from "../redux/clientResevation";
import { useDispatch } from "react-redux";

const Payment = (props) => {
  const [cardnumber, setCardNumber] = useState("");
  const [carddate, setCardDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentmsg, setPaymentMsg] = useState("");
  const [validation, setValidation] = useState([]);
  const [isLoder, setIsLoder] = useState(false);
  const startDate = props.startDate;
  const endDate = props.endDate;
  const amount = props.amount;
  const zimmerData = props.zimmerdata;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.AllReducers.userdata.userdata);

  const checkCreditCard = () => {
    if (!(cardnumber && carddate && cvv)) {
      setPaymentMsg("some payment unformation is missing");
    } else {
      let credit_card_number = new RegExp("^[0-9]{16}?$");
      let credit_card_date = new RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
      let cvv_number = new RegExp("^[0-9]{3}?$");

      if (credit_card_number.test(cardnumber)) {
        setValidation(true);
      } else {
        setValidation(false);
      }

      if (credit_card_date.test(carddate)) {
        setValidation(true);
      } else {
        setValidation(false);
      }

      if (cvv_number.test(cvv)) {
        setValidation(true);
      } else {
        setValidation(false);
      }

      const passing = validation.every((a) => a === true);
      if (passing) {
        setPaymentMsg("Oreder Approved");
        SendReservation();
      } else {
        setPaymentMsg("Payment Method's Details is Incorrect");
      }
    }
  };

  const SendReservation = () => {
    const zimmer = {
      zimmerId: zimmerData._id,
      zimmerName: zimmerData.name,
      zimmerUnitResevation: {
        clientName: userData.firstname + " " + userData.lastname,
        ClientId: userData._id,
        zimmerPrice: zimmerData.price,
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
          setIsLoder(false);
          ClearInputs();
          setPaymentMsg(data.message);
          // dispatch(addresevation(data));
        })
        .catch((error) => console.log(error));
    };
    fetching();
  };

  const BackToMainPage = () => {
    navigate("/mainpage");
  };

  const ClearInputs = () => {
    setCardDate("");
    setCardNumber("");
    setCvv("");
  };

  return (
    <div className="main-payment-container">
      {isLoder ? <Loader /> : ""}
      <div className="inputs-container">
        <div className="inputs">
          <label>Credit Card Number : </label>
          <input
            type={"password"}
            size={16}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="0000 0000 0000 0000"
            value={cardnumber}
          ></input>
        </div>
        <div className="inputs">
          <label>Credit Card Validity : </label>
          <input
            type={"text"}
            size={4}
            onChange={(e) => setCardDate(e.target.value)}
            placeholder="MM/YY"
            value={carddate}
          ></input>
        </div>
        <div className="inputs">
          <label>Credit Card Cvv : </label>
          <input
            type={"password"}
            size={3}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="3 digits"
            value={cvv}
          ></input>
        </div>
        <div>
          <ButtonGroup>
            <Button onClick={checkCreditCard}>
              <SendFill />
              Send Order
            </Button>
            <Button onClick={BackToMainPage}>
              <ArrowReturnRight /> Back
            </Button>
          </ButtonGroup>
        </div>
        <div className="pymnt-msg">
          <label>{paymentmsg}</label>
        </div>
      </div>
    </div>
  );
};

export default Payment;
