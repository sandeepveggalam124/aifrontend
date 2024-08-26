import React from "react";
import {useLocation, useNavigate } from "react-router-dom";
import Toast from "../../utils/toast";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation()
   const { source } = location.state || { source : ''}

  const handleSubmit = (e) => {
    e.preventDefault();
    Toast.success("Login Now");
    navigate("/login");
  };
  
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <h2 className=" fw-bold mt-5">Success!</h2>
      <p className="text-center fs-6 fw-semibold">
        {source === "register" ? "Welcome! You have Registered." : "Congratulations! You have updated your password."}
      </p>
      <button
        className="btn btn-dark rounded-4 login-text fs-6 fw-medium w-25"
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
};

export default Success;
