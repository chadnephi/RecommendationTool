import React, { useState } from "react";
import "./investments.css";
import "../debt.css";

import { FaQuestionCircle } from "react-icons/fa";

const Annuities = () => {
  const [growth, setGrowth] = useState(false);
  const [lifetime, setLifetime] = useState(false);
  const [annuity, setAnnuity] = useState(false);

  const growth2 = () => setGrowth(!growth);
  const lifetime2 = () => setLifetime(!lifetime);
  const annuity2 = () => setAnnuity(!annuity);
  return (
    <div>
      <button onClick={growth2} style={{ maxWidth: "80%" }}>
        Do they need lots of growth and have at least 7 years till Retirement?
      </button>
      <button onClick={lifetime2}>
        Do they need lifetime income (self made pension)?
      </button>
      {growth && (
        <div>
          <p>Accumulation annuity</p>
          <button onClick={annuity2}>
            Once you know which type of income, I would call AMS and ask them to
            create the illustration for an Accumulation annuity.
          </button>
        </div>
      )}
      {lifetime && (
        <div>
          <p>Lifetime income annuity</p>
          <button onClick={annuity2}>
            Once you know which type of income, I would call AMS and ask them to
            create the illustration for an Lifetime annuity.
          </button>
        </div>
      )}
      {annuity && (
        <div className="container">
          <h4>They will ask:</h4>
          <ol>
            <li>Name(s) - (if it's a joint annuity)</li>
            <li>Age of client</li>
            <li>State of client</li>
            <li>Amount</li>
            <li className="info-button">
              Qualified or NonQualified
              <FaQuestionCircle className="info-button" id="question" />
              <p className="additional">
                Qualified = It has some sort of tax status attached to it
                <br />
                <br />
                NonQualified = It has NO tax status attached to it
              </p>
            </li>
          </ol>
          <h5 className="tip">
            If you want better returns, ask for the strategy charge on the
            illustration
          </h5>
          <p>
            Once you call them and get the illustrations, next just study the
            illustrations and read the brochures. Ask your trainer if you have
            more questions about it.
          </p>
          <h4>
            As a side note, these specific annuity companies are go-tos for
            different reasons:
          </h4>
          <table>
            <tr>
              <th>F&G</th>
              <td>Flexible premium (when we want to add more)</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Athene</th>
              <td>Internal tax conversions (Deferred to Exempt)</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>North American</th>
              <td>Highest potential for growth for lump sums over $25K</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Nationwide</th>
              <td>Highest guaranteed lifetime income</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Global Atlantic</th>
              <td>Best LTC options</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default Annuities;
