import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "../../utils/toast";
import Loader from "../Loader";
import createInstance from "../../api/axiosinstance";
import "./index.css";

const OtpAuth = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const { email, source } = location.state || { email: '' }; // Retrieve email from state

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < 5 && value !== "") {
        // Automatically focus on the next input field if available
        e.target.nextElementSibling && e.target.nextElementSibling.focus();
      }
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const aiDishaApi = createInstance("DISHA");

    const enteredOTP = otp.join("");
    if (enteredOTP.length === 6) {
      let endpoint;
    if (source === 'register') {
      endpoint = '/admin-Register-Verify-OTP/';
    } else if (source === 'forget-password') {
      endpoint = '/admin-Forget-Password/Verify-OTP/';
    } else {
      // Handle unsupported source
      return;
    }

      try {
        const response = await aiDishaApi.post(
          endpoint,
          {
            email: email,
            otp: enteredOTP,
          }
        );
        if (response.status === 200) {
          Toast.success(response.data.message);
        if (source === 'register') {
          // Navigate to success page for registration
          navigate("/success",{ state : { source: "register" }});
        } else if (source === 'forget-password') {
          // Navigate to update password page for forget password
          navigate("/updatePassword", { state: { email: email, otp: enteredOTP } });
        }
        } else {
          setError("Invalid OTP. Please try again.");
        }
      } catch (error) {
        setError("An error occurred while verifying OTP.");
      }
      finally {
        setLoading(false); // Stop loading
      }
    } else {
      setError("Please enter a 6-digit OTP.");
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <h2 className="fw-bold mt-5 otp-verification">OTP Verification</h2>
      <p className="">Enter the One Time Password</p>
      <p className="">
        We have sent the verification code to your email address
      </p>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center"
      >
        <div className="d-flex justify-content-center gap-2 m-4">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              className="form-control form-control-sm rounded-4 fs-5 text-center otp"
              value={value}
              onChange={(e) => handleChange(index, e)}
              maxLength="1"
              required
            />
          ))}
        </div>
        {error && <span className="text-danger text-center">{error}</span>}
        <p className="text-end me-4 fw-normal fs-6">
          If you didn't receive a code!
          <span className="fw-normal fs-6 resend-text text-end" id="resend">
            Resend
          </span>
        </p>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-dark w-25 rounded-4 login-text fs-6 fw-semibold"
            disabled={loading} // Disable the button while loading
        >
          {loading ? <Loader /> : "Confirm"}{" "}
          {/* Show Loader or text based on loading state */}
        </button>
        </div>
      </form>
    </div>
  );
};

export default OtpAuth;
