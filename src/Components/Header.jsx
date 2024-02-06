import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/CashFlow" className="link">Cash Flow</Link>
      </h1>
      <h1>
        <Link to="/Debt">Debt</Link>
      </h1>
      <h1>
        <Link to="/EmergencyFund">Emergency Fund</Link>
      </h1>
      <h1>
        <Link to="/Insurances">Insurances</Link>
      </h1>
      <h1>
        <Link to="/Investments">Investments</Link>
      </h1>
      <h1>
        <Link to="/Wealth&Preservation">Wealth & Preservation</Link>
      </h1>
      <h1>
        <Link to="/MidTermGoals">Mid Term Goals</Link>
      </h1>
    </header>
  );
};

export default Header