import axios from "axios";
import { Button, Card } from "react-bootstrap";
import "../App.css";
import thumbtackImg from "../icons/thumbtack.png"
import trashIcon from "../icons/trash.png"

function GigCard(props) {
  const date = props.date.slice(0, 10);
  const client = props.client;
  const details = props.details;
  const payment = props.payment;
  const gigId = props._id;
  const [popup, setPopup] = props.popup;
  let update = {};

  const today = Date.now();
  const gigTime = Date.parse(date);
  const day = 86400000;

  const plus30 = (today - gigTime) / day;

  const removeGig = (e) => {
    console.log(e.target.id);
    if(e.target.id==="paid"){
      update = {paidup : true}
    }else{
      update = {isActive: false}
    }
    axios
      .put(`http://localhost:3800/api/gigs/${gigId}`,update)
      .then((res) => {
        console.log(res);
        setPopup(!popup);
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
            {/* <img src={thumbtackImg} className="thumbtackImg"></img> */}
          <Card.Title>{client}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
          <Card.Text>{details}</Card.Text>
          <Card.Subtitle>{payment} ש"ח</Card.Subtitle>
          <div className="gig-card-buttons">
          <Button className="shira-button" id="paid" onClick={removeGig}>
            שולם? העבר לרשימה
          </Button>
          <Button className="shira-button" id="remove" onClick={removeGig}>
           <img src={trashIcon} className="trashIcon"/>
          </Button>
          </div>
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
