import axios from "axios";
import { Button, Card } from "react-bootstrap";
import "./components.css";
import "../App.css";

function GigCard(props) {
  const date = props.date.slice(0, 10);
  const client = props.client;
  const details = props.details;
  const payment = props.payment;
  const gigId = props._id;
  const [popup, setPopup] = props.popup;

  const today = Date.now();
  const gigTime = Date.parse(date);
  const day = 86400000;

  const plus30 = (today - gigTime) / day;

  const removeGig = (e) => {
    axios
      .put(`http://localhost:3800/api/gigs/${gigId}`, {
        isActive: false,
      })
      .then((res) => {
        console.log(res);
        setPopup("");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <>
      {/* <div className="gig-card"> */}
      <Card
        style={{ width: "18rem" }}
        className="gig-card"
        id={plus30 > 30 ? "gig-card-plus30" : null}
      >
        <Card.Body>
          <Card.Title>{client}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
          <Card.Text>{details}</Card.Text>
          <Card.Subtitle>{payment} ש"ח</Card.Subtitle>
          <Button className="shira-button" onClick={removeGig}>
            שולם? לחץ להסרה
          </Button>
        </Card.Body>
      </Card>
      {/* <li>{date}</li>
        {client? <li>client: {client}</li> : null}
        {details?<li>details: {details}</li> : null}
        {payment?<li>payment: {payment}</li> : null}
        <Button className="shira-button" onClick={removeGig}>Paid up? click to remove</Button> */}
      {/* </div> */}
    </>
  );
}

export default GigCard;