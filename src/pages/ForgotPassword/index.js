import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import Toast from "../../utils/toast";
import createInstance from "../../api/axiosinstance";
import "./index.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const aiDishaApi = createInstance("DISHA");

      const response = await aiDishaApi.post(
        `/admin-Forget-Password-Email/?email=${email}`
      );

      if (response.status !== 200) {
        throw new Error("Email entered is incorrect or not registered");
      }
      Toast.success(response.data.message);
      navigate("/otpVerification", {
        state: {
          email,
          source: "forget-password", // Pass the source prop here
        },
      });
    } catch (error) {
      console.error("Error:", error);
      setErrors({ email: "Error sending OTP. Please try again." });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <h2 className="mt-5">Forgot Password</h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <p className="fw-medium fs-6">
          Enter Email or phone number to send one time Password
        </p>

        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email ID/PhoneNumber"
          autoComplete="off"
          onChange={handleChange}
          className="form-control form-control-sm details placeholder-custom"
          required
        />
        {errors.email && <span>{errors.email}</span>}

        <button
          type="submit"
          className="btn btn-dark rounded-4 login-text fs-6 fw-bold w-25"
          disabled={loading} // Disable the button while loading
        >
          {loading ? <Loader /> : "Send OTP"}{" "}
          {/* Show Loader or text based on loading state */}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
