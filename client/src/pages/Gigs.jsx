import axios from "axios";
import { useState, useEffect, useContext } from "react";
import GigCard from "../components/GigCard";
import Header from "../components/Header";
import PopupAddGig from "../components/PopupAddGig";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Button, Accordion } from "react-bootstrap";


function Gigs(props) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const userId = user._id;
  const [gigs, setGigs] = useState([]);
  const [popup, setPopup] = useState(0);

  // const createGig = (e) => {
  //   setPopup("open");
  // };
  // לטפל בהרשאה
  useEffect(() => {
    axios
      .get(`http://localhost:3800/api/gigs`, {
        headers: {
          authorization: "Bearer " + localStorage.token,
        },
      })
      .then((res) => {
        setGigs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [popup]);

  return (
    <div>
      {/* < Header userName={user.userName} userId={user._id}/> */}
      <Accordion >
        <Accordion.Item eventKey="0" className="shira-head-Accordion">
          <Accordion.Header >הוסף גיג חדש</Accordion.Header>
          <Accordion.Body>
            <PopupAddGig popup={[popup, setPopup]} userId={user._id} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* {popup == "open" ? (
        <PopupAddGig popup={[popup, setPopup]} userId={user._id} />
      ) : null}
      <h1>{user.userName}</h1>
      <button onClick={createGig}>add gig</button> */}

      <div className="out-gigs-list">
        <div>
          <h2>הגיגים שלי</h2>
        </div>
        <div className="gigs-list">
          {gigs
            ? gigs.map((gig) => (
                <GigCard
                  popup={[popup, setPopup]}
                  date={gig.date}
                  client={gig.client}
                  details={gig.details}
                  payment={gig.payment}
                  _id={gig._id}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Gigs;

// dor@gmail.com
