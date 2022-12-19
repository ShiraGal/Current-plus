import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";
import { GigContext } from "../context/GigContext";
import { Button, Accordion, Table } from "react-bootstrap";
import trashIcon from "../icons/trash.png";
import { useReducer } from "react";
import { StoreCtxt } from "../services/StoreService";

function PaidGigs() {
  const { user, gigs } = useContext(StoreCtxt).states;
  const { getMyGigs, removeFromGigs } = useContext(StoreCtxt).actions;
  const removeThisGig = (e) => {
    removeFromGigs(e.target.id);
    getMyGigs();
  };

  return (
    <>
      <Header bold={false} />
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>לקוח</th>
              <th>פרטים</th>
              <th>תאריך</th>
              <th>תשלום</th>
              <th>הסרה</th>
            </tr>
          </thead>
          <tbody>
            {gigs
              ? gigs
                  .filter((gig) => gig.paidup == true)
                  .map((gig) => {
                    return (
                      <tr key={gig._id}>
                        <td>{gig.client}</td>
                        <td>{gig.details}</td>
                        <td>{gig.date.slice(0, 10)}</td>
                        <td>{gig.payment}</td>
                        <td>
                          <Button onClick={removeThisGig} id={gig._id}>
                            <img
                              id={gig._id}
                              src={trashIcon}
                              className="trashIcon"
                            />
                          </Button>
                        </td>
                      </tr>
                    );
                  })
              : null}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PaidGigs;
