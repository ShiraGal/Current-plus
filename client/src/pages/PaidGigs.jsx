import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";
import { GigContext } from "../context/GigContext";
import { Button, Accordion, Table } from "react-bootstrap";
import trashIcon from "../icons/trash.png"

function PaidGigs() {
  const { gigs, setGigs } = useContext(GigContext);
  // const myPaidGigs = gigs.filter((gig)=> gig.paidup===true);
  // console.log(myPaidGigs);
  let update = {}

  const removeGig = (e) => {
    console.log(e.target.id);
    // if(e.target.id==="paid"){
    //   update = {paidup : true}
    // }else{
    //   update = {isActive: false}
    // }
    update = {isActive: false};
    axios
      .put(`http://localhost:3800/api/gigs/${e.target.id}`,update)
      .then((res) => {
        console.log(res);
        // setPopup(!popup);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <Header bold={false}/>
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
                  .map((gig) => (
                    <tr>
                      <td>{gig.client}</td>
                      <td>{gig.details}</td>
                      <td>{gig.date.slice(0, 10)}</td>
                      <td>{gig.payment}</td>
                      <td><Button onClick={removeGig} id={gig._id}><img src={trashIcon} className="trashIcon"/></Button></td>
                    </tr>
                  ))
              : null}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PaidGigs;
