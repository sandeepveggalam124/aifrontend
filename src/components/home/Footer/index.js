import React from "react";
import './index.css'

const Footer = () => {
  return (
    <div className="row footer text-white border-top">
      <div className="col col-lg-1 custom-border-end d-flex justify-content-center align-items-center"></div>
      <div className="col col-lg-4 custom-border-end d-flex align-items-center">
        Copyright from UPL
      </div>
      <div className="d-flex justify-content-center align-content-center col col-lg-1 border-end">
        {/* <img src="/assests/images/footer-lines.svg" alt="Bootstrap" /> */}
      </div>
      <div className="col col-lg-5 d-flex justify-content-center align-items-center border-end">
        <div className="  d-flex justify-content-center align-items-center"></div>
      </div>
      <div className="col col-lg-1 custom-border-end "></div>
    </div>
  );
};

export default Footer;
