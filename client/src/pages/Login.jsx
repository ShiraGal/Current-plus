import { useRef, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import thumbtackImg from "../icons/thumbtack.png"

function Login(props) {
  // const [user, setUser] = props.user
  const { user, setUser } = useContext(UserContext);
  const email = useRef();
  const pass = useRef();
  const navigate = useNavigate();
  //   const [userName, setUserName] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    console.log("by ref:", email.current.value, pass.current.value);

    axios
      .post(
        "http://localhost:3800/api/users/login",
        {
          email: email.current.value,
          password: pass.current.value,
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.token,
          },
        }
      )
      .then((res) => {
        // setUserName(res.data.msg);
        localStorage.token = res.data.token;
        setUser(res.data.msg);
        navigate("/gigs");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
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
