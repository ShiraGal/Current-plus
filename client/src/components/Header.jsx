import axios from "axios";
import { useState, useContext} from "react";
import logo from "../image/logo.png";
import table from "../icons/table.png";
import logOut from "../icons/log-out.png"
import { Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { StoreCtxt } from "../services/StoreService";


function Header(props) {
  const userId = props.userId;
  // const userName = props.userName;
  // const [path, setPath]= useState(`header-link-${props.path}`)
  const [gigsId, setGigsId] = useState(props.bold)
  const {user, gigs} = useContext(StoreCtxt).states;
  const {logoutUser} = useContext(StoreCtxt).actions;
 
  const signOut = ()=>{
    console.log("signOut");
    logoutUser();
  }


  return (
    <div className="header-out">
      <div className="header-in">
        <div>   
          <Link className="header-link" id={`header-link-${props.bold}`}  to="/gigs">הגיגים שלי</Link>
          <Link className="header-link" id={`header-link-${!props.bold}`} to="/paidgigs">גיגים משולמים</Link>
        </div>
        <div className="header-right">
          {/* <img src={logo} /> */}
          {/* <img className="header-table-buttom" src={table} /> */}
          <NavDropdown title={<img src={logo} />} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={signOut}>יציאה<img src={logOut}/></NavDropdown.Item>
            </NavDropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
