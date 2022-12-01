import axios from "axios";
import { useState } from "react";
import logo from "../image/logo.png";
import table from "../icons/table.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
  const userId = props.userId;
  // const userName = props.userName;
  // const [path, setPath]= useState(`header-link-${props.path}`)
  const [gigsId, setGigsId] = useState(true)
  
//////////////////////////////////////////////////////////////לסדר פה את עניים הקלאסים ללינקים

  return (
    <div className="header-out">
      <div className="header-in">
        <div>   
          <Link className="header-link" id={`header-link-${gigsId}`} onClick={()=>setGigsId(true)} to="/gigs">הגיגים שלי</Link>
          <Link className="header-link" id={`header-link-${gigsId}`} onClick={()=>setGigsId(false)} to="/paidgigs">גיגים משולמים</Link>
        </div>
        <div className="header-right">
          <img src={logo} />
          <img className="header-table-buttom" src={table} />
        </div>
      </div>
    </div>
  );
}

export default Header;
