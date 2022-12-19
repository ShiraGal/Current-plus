import axios from "axios";
import { useState, useEffect, useContext } from "react";
import GigCard from "../components/GigCard";
import Header from "../components/Header";
import { StoreCtxt } from "../services/StoreService";

import PopupAddGig from "../components/PopupAddGig";
import { useNavigate } from "react-router-dom";
import { Button, Accordion } from "react-bootstrap";

function Gigs(props) {
  const navigate = useNavigate();
  const {user, gigs} = useContext(StoreCtxt).states;
  const {getMyGigs} = useContext(StoreCtxt).actions;

  const userId = user._id;
  const [popup, setPopup] = useState(false);

  const createGig = (e) => {
    setPopup(!popup);
  };

  useEffect(()=>{
    getMyGigs();
  },[])

  return (
    <div className="gigs-page">
      <Header bold={true} />
      <Accordion>
        <Accordion.Item eventKey="0" className="shira-head-Accordion">
          <Accordion.Header>הוסף גיג חדש</Accordion.Header>
          <Accordion.Body>
            <PopupAddGig popup={[popup, setPopup]} userId={user._id} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="out-gigs-list">
        <div className="gigs-list">
          {gigs
            ? gigs
                .filter((gig) => gig.paidup === false)
                .map((gig) => {
                  return (
                    <GigCard key={gig._id}
                      popup={[popup, setPopup]}
                      date={gig.date}
                      client={gig.client}
                      details={gig.details}
                      payment={gig.payment}
                      _id={gig._id}
                    />
                  );
                })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Gigs;

