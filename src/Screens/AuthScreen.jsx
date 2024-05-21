import React from "react";
import { useNavigate } from "react-router-dom";
import "./authScreen.css";

const AuthScreen = (props) => {
  const { token, setUsersToken, usersToken, setIsAuthorized } = props;
  const navigate = useNavigate();

  const checkToken = () => {
    if (usersToken === token) {
      setIsAuthorized(true);
      navigate("/Home");
      }else{
          alert("Incorrect PIN, try again.")
    }
  };
  return (
    <div className="auth">
      <h2 className="topper">How to Make Recommendations - Tool</h2>
      <h2>Please enter PIN to view page.</h2>
      <input
        type="text"
        onChange={(e) => setUsersToken(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? checkToken() : "")}
      />
      <button type="submit" onClick={checkToken}>
        Access Tool
      </button>
    </div>
  );
};

export default AuthScreen;
