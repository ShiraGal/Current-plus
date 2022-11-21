import axios from "axios";
import { useRef, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function PopupAddGig(props) {
  const [popup, setPopup] = props.popup;
  const userId = props.userId;
  const date = useRef();
  const client = useRef();
  const details = useRef();
  const payment = useRef();

  const submitGig = (e) => {
    e.preventDefault();
    if(!date.current.value){
      console.log("ddddd"+date.current.value);
    }

    axios
      .post(`http://localhost:3800/api/gigs/user/${userId}`, {
        date: date.current.value,
        client: client.current.value,
        details: details.current.value,
        payment: payment.current.value,
      })
      .then((res) => {
        console.log(res);
        // setPopup("close");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  // const closePopup = (e) => {
  //   setPopup("close?");
  // };

  return (
    <>
      <Form onSubmit={submitGig} className="shira-popup-form">
        <Form.Group as={Row} className="mb-3" controlId="formBasicText">
          <Form.Label column sm="2">
            תאריך:
          </Form.Label>
          <Col sm="10">
            <Form.Control ref={date} name="date" type="date" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicText">
          <Form.Label column sm="2">
            הלקוח:
          </Form.Label>
          <Col sm="10">
            <Form.Control ref={client} name="client" type="text" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label column sm="2">
            תיאור:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              ref={details}
              name="details"
              type="text"
              as="textarea"
              rows={3}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicText">
          <Form.Label column sm="2">
            סכום לתשלום:
          </Form.Label>
          <Col sm="10">
            <Form.Control ref={payment} name="payment" type="Number" />
          </Col>
        </Form.Group>

        <Button type="submit" value="Send" >
          הכנס גיג!
        </Button>
      </Form>
    </>
  );
}

export default PopupAddGig;
