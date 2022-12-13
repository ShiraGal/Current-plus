import { useRef, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { GigContext } from "../context/GigContext";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import thumbtackImg from "../icons/thumbtack.png"
import { StoreCtxt } from "../services/StoreService";

function Login(props) {
  const {user, gigs} = useContext(StoreCtxt).states;
  const {loginUser} = useContext(StoreCtxt).actions;
  // const [user, setUser] = props.user
  // const { user, setUser } = useContext(UserContext);
  // const {gigs, setGigs}= useContext(GigContext);
  const email = useRef();
  const pass = useRef();
  const navigate = useNavigate();
  //   const [userName, setUserName] = useState();

  // const getAllGigs = ()=>{
  //   axios
  //     .get(`http://localhost:3800/api/gigs`, {
  //       headers: {
  //         authorization: "Bearer " + localStorage.token,
  //       },
  //     })
  //     .then((res) => {
  //       setGigs(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // }

  const submitForm = (e) => {
    e.preventDefault();
    console.log("by ref:", email.current.value, pass.current.value);
    loginUser({
              email: email.current.value,
              password: pass.current.value,
            })
            
  //   axios
  //     .post(
  //       "http://localhost:3800/api/users/login",
  //       {
  //         email: email.current.value,
  //         password: pass.current.value,
  //       },
  //       {
  //         headers: {
  //           authorization: "Bearer " + localStorage.token,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       // setUserName(res.data.msg);
  //       localStorage.token = res.data.token;
  //       setUser(res.data.msg);
  //       // getAllGigs()
  //       navigate("/gigs");
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  };

  const goRegister = (e) => {
    navigate("/register");
  };
  
  return (
    <div d-flex className="shira-outForm">
      <div className="login-title">
        <img className="thumbtackImg" src={thumbtackImg}></img>
      <h1>שוטף+שלושים</h1>
      </div>
      <h3>הכרטיס הצהוב שיזכיר לך לדרוש תשלום מלקוח שהגזים</h3>
      <Form onSubmit={submitForm} className="shira-form">
        <FloatingLabel
          controlId="floatingInput"
          label="אימייל"
          className="mb-3"
        >
          <Form.Control
            type="email"
            ref={email}
            name="email1"
            placeholder="name@example.com"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="סיסמא"
          className="mb-3"
        >
          <Form.Control
            type="password"
            ref={pass}
            name="pass1"
            placeholder="Password"
          />
        </FloatingLabel>
        <div className="d-grid gap-2">
          <Button className="shira-button" variant="primary" type="submit">
            כניסה
          </Button>
        </div>
      </Form>
      <hr></hr>
      <div className="d-grid gap-2">
        <Button className="shira-button" onClick={goRegister}>
          הרשמה
        </Button>
      </div>
    </div>
  );
}

export default Login;
