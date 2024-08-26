import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader";
import Toast from "../../utils/toast";
import createInstance from "../../api/axiosinstance";

const UpdatePassword = () => {
  // State to hold new password, confirm password, loading state, and error message
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Error state

  const navigate = useNavigate();
  const location = useLocation();

  const { email, otp } = location.state || { email: "" };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state before each submission

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!"); // Set error message
      setLoading(false); // Stop loading
      return;
    }
    try {
      const aiDishaApi = createInstance("DISHA");
      
      const url = `/admin-Password-Reset/?new_password=${newPassword}&confirm_password=${confirmPassword}`;

      const response = await aiDishaApi.post(url, { email, otp });

      if (response.status !== 200) {
        throw new Error("Email entered is incorrect or not registered/check otp");
      }

      Toast.success(response.data.message);
      navigate("/success", {
        state: {
          source: "updated-password", // Pass the source prop here
        },
      });
    } catch (error) {
      setError("An error occurred. Please try again."); // Set error message
    }
    finally {
      setLoading(false); // Stop loading
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <h2 className="mt-5">Change Password</h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column w-75 justify-content-center align-items-center gap-3"
      >
        {error && <div className="alert alert-danger">{error}</div>} {/* Display error if present */}
        <div className="input-group input-group-sm">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="New Password*"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
        </div>

        <div className="input-group input-group-sm">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password*"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        </div>
        <button
          type="submit"
          className="btn btn-dark rounded-4 login-text fs-6 fw-bold w-25"
          disabled={loading} // Disable the button while loading
        >
          {loading ? <Loader /> : "Submit"}{" "}
          {/* Show Loader or text based on loading state */}
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
