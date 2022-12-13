import { useRef, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Form, Button} from 'react-bootstrap'
import { StoreCtxt } from "../services/StoreService";

function Register() {
  const {user, gigs} = useContext(StoreCtxt).states;
  const {addNewUser} = useContext(StoreCtxt).actions;
  const userName = useRef();
  const email = useRef();
  const pass = useRef();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(
    //   "by ref:",
    //   userName.current.value,
    //   email.current.value,
    //   pass.current.value
    // );
    addNewUser({
          userName : userName.current.value,
          email : email.current.value,
          password : pass.current.value
        })
        navigate("/")
    // axios.post("http://localhost:3800/api/users/register", {
    //     userName : userName.current.value,
    //     email : email.current.value,
    //     password : pass.current.value
    // })
    // .then((res) => {
    //     console.log(res);
    //     navigate("/gigs")
    //   })
    // .catch((err) => {
    //     console.log(err.response.data);
    // });
  };

  return (
    <div>
      {/* <h2>---טופס הרשמה---</h2> */}
      <Form onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>בחר שם משתמש</Form.Label>
        <Form.Control type="text" ref={userName} name="userName1"/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>מייל</Form.Label>
        <Form.Control  ref={email}
            name="email1"
            type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>בחר סיסמא</Form.Label>
        <Form.Control type="Password" ref={pass}
            name="pass1"
            />
      </Form.Group>
      

        <Button type="submit" variant="primary">שליחה</Button>
      </Form>
    </div>
  );
}

export default Register;
