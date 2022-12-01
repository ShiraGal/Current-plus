import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Button, Accordion } from "react-bootstrap";

function PaidGigs(){
    return(
        <>
        <Header />
        </>
    )
}

export default PaidGigs