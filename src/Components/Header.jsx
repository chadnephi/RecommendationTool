import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import "./header.css";

const Header = () => {
  return (
    <header>
      <Link to="/Home">
        <FaHome className="homebtn" />
      </Link>
      <Link to="/CashFlow">
        <h1>Cash Flow</h1>
      </Link>

      <Link to="/Debt">
        <h1>Debt</h1>
      </Link>

      <Link to="/EmergencyFund">
        <h1>Emergency Fund</h1>
      </Link>

      <Link to="/Insurances">
        <h1>Insurances</h1>
      </Link>

      <Link to="/Investments">
        <h1>Investments</h1>
      </Link>

      <Link to="/Wealth&EstatePreservation">
        <h1>Wealth & Estate Preservation</h1>
      </Link>

      <Link to="/MidTermGoals">
        <h1>Mid Term Goals</h1>
      </Link>
    </header>
  );
};

export default Header;
