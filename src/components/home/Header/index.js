import React, { useState,useContext,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { LoginContext } from "../../../contexts/loginContext";
import { CapitalizeName } from "../../../utils/capitalizeName";
import "./index.css";

const Header = () => {
const {isLoggedIn,user:name,logout}=useContext(LoginContext)
const [input, setInput] = useState("");
const navigate = useNavigate();
const location = useLocation()
const userName=CapitalizeName(name)

const handleLogOut=()=>{
  logout()
  navigate('/login')
}

const isInterviewPage =
location.pathname === '/interview/question' ||
location.pathname === '/interview/finish';

  return (
    <div className="row  header text-white border-bottom">
      <div className="col col-lg-1 d-flex justify-content-center align-items-center custom-border-end">
        <img src="/assests/images/bullet-list.svg" alt="Bootstrap" />
      </div>
      <div className="col col-lg-4 custom-border-end d-flex align-items-center">
        <img src="/assests/images/logopic.svg" alt="Bootstrap" />
      </div>
      <div className="col col-lg-1 custom-border-end"></div>
      <div className="col col-lg-5 d-flex gap-3 justify-content-evenly align-items-center custom-border-end">
      {isLoggedIn ? (<div className="welcome-class">Welcome,{userName}</div>):(
        <>
        <div className="d-flex align-items-center px-2 py-1 w-50 border border-white border-2 rounded-5 text-white">
          <FaSearch />
          <input className="search-box"
            placeholder="Search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <button
          className="login py-1 justify-content-center align-items-center login-link fs-6 fw-medium"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        </>)}
      </div>
    <div className="col col-lg-1 d-flex align-items-center justify-content-center">
    {!isInterviewPage && isLoggedIn &&
      (<img src='/assests/images/material-symbols_logout.svg' alt={'Logout'} onClick={()=>handleLogOut()}></img>)}
    </div>

    </div>
)};

export default Header;
