import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import Toast from "../../utils/toast";
import { LoginContext } from "../../contexts/loginContext";
import Loader from "../Loader";

const Login = () => {
  const { login } = useContext(LoginContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = {};
    try {
      const loginStatus = await login(formData.email, formData.password);
      if (loginStatus) {
        const role = loginStatus?.role;
        console.log("role in login in handle submit", role);

        if (role === "Student") navigate("/avatarLanding");
        else if (role === "Organization") navigate("/organizationLanding");
        // else if (role === "Admin") navigate("/adminLanding");
        else navigate("/login");
        Toast.success("logged in");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      Toast.error("Failed to log in. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }

    // if (!formData.email.trim()) {
    //   validationErrors.email = "Email ID/PhoneNumber is required";
    // } else if (!formData.mobilenumber.trim()) {
    //   validationErrors.mobilenumber = "Mobile Number is required";
    // } else if (formData.mobilenumber.length < 10) {
    //   validationErrors.mobilenumber =
    //     "Mobile number should be at least 10 char";
    // }

    // if (!formData.password.trim()) {
    //   validationErrors.password = "Password is required";
    // } else if (formData.password.length < 6) {
    //   validationErrors.password = "Password should be at least 6 char";
    // }

    // setErrors(validationErrors);

    // if (Object.keys(validationErrors).length === 0) {
    //   alert("Submitted successfully");
    // }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <h2 className="text-center mt-1">Login</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
        <p className="fw-medium fs-6 text-center">
          Enter your Email or phone number as well as passcode
        </p>
        <div className="">
          <input
            type="email"
            name="email"
            placeholder="Email ID/PhoneNumber"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
            className="form-control form-control-sm details placeholder-custom"
            // required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="input-group input-group-sm">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password*"
            onChange={handleChange}
            value={formData.password}
            className="form-control form-control-sm details placeholder-custom"
            // required
          />
          <span
            className="input-group-text details placeholder-custom"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <i className="bi bi-eye-slash eye"></i>
            ) : (
              <i className="bi bi-eye eye"></i>
            )}
          </span>

          {errors.password && <span>{errors.password}</span>}
        </div>
        <div className="form-text fw-bold text-start login-form-text">
          Please Enter Valid Email ID or Phone Number
        </div>
        <p className="text-end">
          <Link to="/forgotPassword" className="text-decoration-none forget-pw">
            Forgot Password?
          </Link>
        </p>

        <button
          type="submit"
          className="btn btn-dark rounded-4 fs-6 fw-bold login-text"
          disabled={loading} // Disable the button while loading
        >
          {loading ? <Loader /> : "Login"}{" "}
          {/* Show Loader or text based on loading state */}
        </button>
        <button
          onClick={() => navigate("/")}
          className="btn btn-dark rounded-4 fs-6 fw-bold register-text"
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default Login;
