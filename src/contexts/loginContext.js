import React, { createContext, useState, useEffect, useReducer } from "react";
import createInstance from "../api/axiosinstance";
import Toast from "../utils/toast";

const ACCESS_TOKEN_KEY = "accessToken";
const USER_NAME = "name";
const ADMIN_ID = "admin_id";
const ORGANIZATION_ID = "organization_id";

const LoginContext = createContext();

const loginReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        adminId: action.payload.adminId,
        organizationId: action.payload.organizationId,
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        adminId: null,
        organizationId: null,
      };
    default:
      return state;
  }
};

const initialState = {
  isLoggedIn: false,
  user: null,
  adminId: null,
  organizationId: null,
};

const LoginProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(null);
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const dishaApi = createInstance("DISHA");

  const login = async (username, password) => {
    try {
      const response = await dishaApi.post(
        "/admin-Login",
        `username=${encodeURIComponent(username)}&password=${encodeURIComponent(
          password
        )}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const data = response.data;
      setLoginStatus(data);
      localStorage.setItem(ACCESS_TOKEN_KEY, data.access_token);
      localStorage.setItem(USER_NAME, data.name);
      localStorage.setItem(ADMIN_ID, data.organization_id);
      localStorage.setItem(ORGANIZATION_ID, data.organization_id);

      dispatch({
        type: "login",
        payload: {
          user: data.name,
          adminId: data.organization_id,
          organizationId: data.organization_id,
        },
      });
      return data;
    } catch (error) {
      console.error("Error logging in:", error.message);
      Toast.error(error.message);
    }
  };

  const logout = () => {
    try {
      setLoginStatus(null);
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(USER_NAME);
      localStorage.removeItem(ADMIN_ID);
      localStorage.removeItem(ORGANIZATION_ID);

      dispatch({ type: "logout" });
    } catch (error) {
      console.error("Error in logout", error);
    }
  };

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedUserName = localStorage.getItem("name");
    const storedAdminId = localStorage.getItem("admin_id");
    const storedOrganizationId = localStorage.getItem(ORGANIZATION_ID);

    if (storedAccessToken) {
      dispatch({
        type: "login",
        payload: {
          user: storedUserName,
          adminId: storedAdminId,
          organizationId: storedOrganizationId,
        },
      });
    }
  }, []);

  return (
    <LoginContext.Provider value={{ ...state, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
