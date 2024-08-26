import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import Register from "../Register/index";
import Login from "../Login/index";
import OtpAuth from "../OtpAuth";
import ForgotPassword from "../ForgotPassword/index";
import Success from "../Success/index";
import UpdatePassword from "../UpdatePassword/index";

const MainBox = () => {
  const location = useLocation();
  const [highlightedLink, setHighlightedLink] = useState(0);

  const links = ["GoStandOut", "GoLearn", "GoToTest", "GoSolveCode"];

  const handleLinkClick = (index) => {
    setHighlightedLink(index);
  };

  return (
    <div className="row custom-div text-white">
      <div className="col col-lg-1 border-end d-flex justify-content-around align-items-center flex-column">
        <img src="/assests/images/profile.svg" alt="Bootstrap" className="" />
        <div className="rotate-text ">
          <a
            href={`link_to_${links[0].toLowerCase()}`}
            className={`welcome-text ${
              highlightedLink === 0 ? "highlighted-link" : ""
            }`}
            onClick={() => handleLinkClick(0)}
          >
            {links[0]}
          </a>
        </div>
        <div className="rotate-text ">
          <a
            href={`link_to_${links[1].toLowerCase()}`}
            className={`welcome-text ${
              highlightedLink === 1 ? "highlighted-link" : ""
            }`}
            onClick={() => handleLinkClick(1)}
          >
            {links[1]}
          </a>
        </div>
        <div className="rotate-text ">
          <a
            href={`link_to_${links[2].toLowerCase()}`}
            className={`welcome-text ${
              highlightedLink === 2 ? "highlighted-link" : ""
            }`}
            onClick={() => handleLinkClick(2)}
          >
            {links[2]}
          </a>
        </div>
        <div className="rotate-text ">
          <a
            href={`link_to_${links[3].toLowerCase()}`}
            className={`welcome-text ${
              highlightedLink === 3 ? "highlighted-link" : ""
            }`}
            onClick={() => handleLinkClick(3)}
          >
            {links[3]}
          </a>
        </div>
      </div>
      <div className="col col-lg-4 d-flex flex-column justify-content-center align-items-center">
        <p className="fs-1 fst-italic welcome-text badge text-wrap fw-bold">
          Welcome to GoStandOut
        </p>

        <div className="col-lg-8">
          <p className="fs-6 fst-italic fw-normal welcome-text badge text-wrap lh-base">
            Transforming Job Searches into Success Stories - Because Your Resume
            Deserves Intelligence.
          </p>
        </div>
      </div>
      <div className="col col-lg-1 border-end bg-first-image"></div>
      <div className="col col-lg-5 bg-image d-flex justify-content-center align-items-center py-2 px-1">
        <div className="content-div rounded-4">
          {location.pathname === "/" && <Register />}
          {location.pathname === "/login" && <Login />}
          {location.pathname === "/forgotPassword" && <ForgotPassword />}
          {location.pathname === "/otpVerification" && <OtpAuth />}
          {location.pathname === "/updatePassword" && <UpdatePassword />}
          {location.pathname === "/success" && <Success />}
        </div>
      </div>
      <div className="col col-lg-1 bg-last-image"></div>
    </div>
  );
};

export default MainBox;
