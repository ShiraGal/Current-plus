import axios from "axios";
import { useState } from "react";
import PopupAddGig from "./PopupAddGig";

function Header(props) {
  const userId = props.userId;
  const userName = props.userName;
  const [popup, setPopup] = useState("close")

  const createGig = (e)=>{
    setPopup("open")
  }

  
  return (
    <>
    {popup=="open" ? <PopupAddGig popup={[popup, setPopup]} userId={userId}/> : null}
      <h1>{userName}</h1>
      <button onClick={createGig}>add gig</button>
    </>
  );
}

export default Header;
