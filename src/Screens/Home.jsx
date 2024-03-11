import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = (props) => {
  const { token, setUsersToken, usersToken, setIsAuthorized } = props;
  const navigate = useNavigate();

  const checkToken = () => {
    if (usersToken === token) {
      setIsAuthorized(true);
      navigate("/CashFlow");
      }else{
          alert("Incorrect PIN, try again.")
    }
  };
  return (
    <div className="home">
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

export default Home;
