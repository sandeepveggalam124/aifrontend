import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import Toast from "../../utils/toast";
import Loader from "../Loader";
import createInstance from "../../api/axiosinstance";

const Register = () => {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    mobile_number: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    //   setFormData((prevFormData)=>({
    //     ...prevFormData,
    //    [e.target.name]:e.target.value
    // }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (Object.keys(errors).length === 0) {
    } else {
      console.log("Form has errors. Please check.");
    }
    try {
      const aiDishaApi = createInstance("DISHA");
      const response = await aiDishaApi.post("/admin-Register/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) {
        throw new Error("Registration failed");
      }

      Toast.success(response.data.message);
      navigate("/otpVerification", {
        state: {
          email: formData.email,
          source: "register", // Pass the source prop here
        },
      });
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center mt-1">Sign up</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-1">
        <select
          className="form-select form-select-sm details"
          aria-label="Default select example"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="Student" className="role">
            Student
          </option>
          <option value="Organization" className="role">
            Organization
          </option>
          {/* <option value="Admin" className="role">
            Admin
          </option> */}
        </select>
        <input
          type="text"
          name="name"
          placeholder="First Name*"
          value={formData.name}
          autoComplete="off"
          onChange={handleChange}
          className="form-control form-control-sm details placeholder-custom"
          required
        />
        {errors.fname && <span>{errors.fname}</span>}

        {/* <input
          type="text"
          name="lname"
          placeholder="Last Name*"
          value={formData.lname}
          autoComplete="off"
          onChange={handleChange}
          className="form-control form-control-sm details placeholder-custom"
          required
        />
        {errors.lname && <span>{errors.lname}</span>} */}

        <input
          type="email"
          name="email"
          placeholder="Email ID*"
          value={formData.email}
          autoComplete="off"
          onChange={handleChange}
          className="form-control form-control-sm details placeholder-custom"
          required
        />
        {errors.email && <span>{errors.email}</span>}

        <input
          type="tel"
          name="mobile_number"
          placeholder="Mobile Number*"
          value={formData.mobile_number}
          autoComplete="off"
          onChange={handleChange}
          className="form-control form-control-sm details placeholder-custom"
          required
        />
        {errors.mobilenumber && <span>{errors.mobilenumber}</span>}

        <div className="input-group input-group-sm">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            className="form-control form-control-sm details placeholder-custom"
            required
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

        <div className="input-group input-group-sm">
          <input
            type={showPassword ? "text" : "password"}
            name="confirm_password"
            placeholder="Confirm Password*"
            value={formData.confirm_password}
            onChange={handleChange}
            className="form-control form-control-sm details placeholder-custom"
            required
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
          {errors.cpassword && <span>{errors.cpassword}</span>}
        </div>

        <button
          type="submit"
          className="btn rounded-4 btn-dark fs-6 fw-bold register-btn"
          disabled={loading} // Disable the button while loading
        >
          {loading ? <Loader /> : "Register Now"}{" "}
          {/* Show Loader or text based on loading state */}
        </button>

        <p className="form-text text-center forget-pw">
          Have an Account?{" "}
          <Link to="/login" className="text-decoration-none resend-text">
            {" "}
            Login{" "}
          </Link>
        </p>
        <p className="text-center privacy-text">
          By signing up, you agree to our
          <Link to="/" className="fw-bold text-decoration-none resend-text">
            {" "}
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link to="/" className="fw-bold text-decoration-none resend-text">
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
