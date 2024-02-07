import React from "react";
import { useState } from "react";
import "./debt.css";

const Debt = () => {
  const [debt, setDebt] = useState(false);
  const [noDebt, setNoDebt] = useState(false);
  const [secure, setSecure] = useState(false);
  const [unsecure, setUnsecure] = useState(false);

  const debt2 = () => setDebt(!debt);
  const noDebt2 = () => setNoDebt(!noDebt);
  const secure2 = () => setSecure(!secure);
  const unsecure2 = () => setUnsecure(!unsecure);

  return (
    <div>
      <h3>Do they have any debts?</h3>
      <button onClick={debt2}>Yes</button>
      <button onClick={noDebt2}>No</button>
      {debt && (
        <div>
          <h3>What types?</h3>
          <div className="secureButtons">
            <div className="container">
              <button className="info-button" onClick={secure2}>
                Secure
              </button>
              <div className="additional-info">
                <p>Backed by assests / Collateral</p>
              </div>
            </div>
            <div className="container">
              <button className="info-button" onClick={unsecure2}>
                Unsecure
              </button>
              <div className="additional-info">
                <p>Not backed by a hard asset or a type of collateral</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {noDebt && (
        <h4>Great! Skip this section of recommendations (why are you here?)</h4>
      )}
      {secure && (
        <div>
          <ul>
            <li>Home / Real estate</li>
            <li>Car / Vehicles </li>
            <li>Home Equity Lines of Credit (HELOC)</li>
            <li>401K Loan / other investment loans</li>
          </ul>
        </div>
      )}
      {unsecure && (
        <div>
            <ul>
                <li>Credit cards </li>
                <li>Personal loans</li>
                <li>Student Loans </li>
                <li>Medical Loans</li>
            </ul>
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Debt;
