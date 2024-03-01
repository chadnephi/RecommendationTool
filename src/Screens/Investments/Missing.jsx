import React, { useState } from "react";
import "./investments.css";
import Options from "./Options";

const Missing = () => {
  const [timeFrame, setTimeFrame] = useState(false);
  const [liquid, setLiquid] = useState(false);
  const [options, setOptions] = useState(false);

  const timeFrame2 = () => setTimeFrame(!timeFrame);
  const liquid2 = () => setLiquid(!liquid);
  const options2 = () => setOptions(!options);
  return (
    <div>
      <div className="month">
        <h4>What happens if they are missing any of these?</h4>
        <table>
          <tr className="columns">
            <th>Growth</th>
            <th>Safety</th>
            <th>Tax Advantages</th>
            <th>Protection</th>
          </tr>
          <tr className="columns">
            <td>(Investments are fixed)</td>
            <td>(Their funds are all variable)</td>
            <td>(Not in a tax exempt bucket (ie. Roth or Perm Insurance))</td>
            <td>They don't have emergency funds or insurances</td>
          </tr>
        </table>
      </div>
      <button onClick={timeFrame2}>What is their timeframe?</button>
      {timeFrame && (
        <div className="month">
          <table>
            <tr className="columns">
              <th>Short term (they have less than 10 years)</th>
              <th>Mid term (they have 15 years or so)</th>
              <th>Long term (they have over 15 years)</th>
            </tr>
            <tr className="columns">
              <td>Possibly an annuity</td>
              <td>IUL</td>
              <td>IUL</td>
            </tr>
            <tr className="columns">
              <td>MF</td>
            </tr>
          </table>
          <button onClick={liquid2}>What are their liquidity needs?</button>
          {liquid && (
            <div className="month">
              <table>
                <tr className="columns">
                  <th>High</th>
                  <th>Low</th>
                </tr>
                <tr className="columns">
                  <td>Stocks</td>
                  <td>IUL</td>
                </tr>
                <tr className="columns">
                  <td>MF</td>
                  <td>Annuities</td>
                </tr>
              </table>
              <h3 className="tip">
                At this point you've probably assessed that they need multiple
                cornerstones and have some rough ideas on what could work. Let's
                pull it all together
              </h3>
              <button onClick={options2}>Options</button>
            </div>
          )}
        </div>
      )}
      {options && <Options />}
    </div>
  );
};

export default Missing;
