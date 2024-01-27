import { ButtonGroup, Card } from "react-bootstrap";
import "./OurZimmers.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addZimerData } from "../redux/zimmerData";
import { useNavigate } from "react-router-dom";
import { CurrencyDollar } from "react-bootstrap-icons";
import Loader from "../loader/loader";

const OurZimers = () => {
  const [zimmerunit, setZimmerUnit] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = useSelector((state) => state.AllReducers.userdata.userdata.role);
  const newSearch = useSelector(
    (state) => state.AllReducers.searchTo.searchInput
  );

  const FilterData = zimmerunit.filter((item) => {
    return (
      item.region.toLowerCase().includes(newSearch.toLowerCase()) ||
      item.name.toLowerCase().includes(newSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(newSearch.toLowerCase())
    );
  });

  //-------------------------------Display Zimmer's List Function -----------------------//

  useEffect(() => {
    const fetching = async () => {
      setIsLoader(true);
      await fetch("http://localhost:5000/zimmer/zimmerlist")
        .then((response) => response.json())
        .then((data) => {
          setIsLoader(false);
          if (data.download) {
            dispatch(addZimerData(data.zimmerdata));
          }
          setZimmerUnit(data.zimmerdata);
        })
        .catch((err) => console.log(err));
    };
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  //-------------------------------------Delete Zimmer Function -------------------------//

  const DeleteZimmer = (id) => {
    const PostTodata = {
      method: "POST",
      headers: {
        "Access-Control": "Allow-Origin",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    };

    const fetching = async () => {
      setIsLoader(true);
      await fetch("http://localhost:5000/zimmer/deletezimmer", PostTodata)
        .then((response) => response.json())
        .then((data) => {
          setIsLoader(false);
          console.log(data);
          if (data.messsge) {
            setRefresh(!refresh);
          }
        })
        .catch((err) => console.log(err));
    };
    fetching();
  };

  const editZimmer = (zimmerunit) => {
    navigate("/editzimmer", { state: zimmerunit });
  };

  const Reservation = (zimmerunit) => {
    navigate("/reservezimmer", { state: zimmerunit });
  };

  return (
    <div>
      {isLoader ? <Loader /> : ""}
      <div className="grid-container">
        {FilterData.map((unit) => {
          return (
            <div key={unit._id}>
              <Card className="grid-item">
                <Card.Header>
                  <Card.Title>{unit.name}</Card.Title>
                </Card.Header>
                <Card.Img alt="zimmer img" src={unit.img} />
                <Card.Body>
                  <Card.Text>{unit.description}</Card.Text>
                  <Card.Text>
                    Price: {unit.price} <CurrencyDollar /> per night
                  </Card.Text>
                  <Card.Text>Region: {unit.region}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  {role === "user" ? (
                    <button
                      className="btn btn-info"
                      onClick={() => Reservation(unit)}
                    >
                      Reserve
                    </button>
                  ) : role === "admin" ? (
                    <ButtonGroup>
                      <button
                        className="btn btn-outline-info"
                        onClick={() => editZimmer(unit)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-info"
                        onClick={() => DeleteZimmer(unit._id)}
                      >
                        Delete
                      </button>
                    </ButtonGroup>
                  ) : (
                    ""
                  )}
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurZimers;
