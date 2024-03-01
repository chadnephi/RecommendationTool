import React, { useState } from "react";
import "./investments.css";
import Missing from "./Missing";

const AllTheWay = () => {
  const [all, setAll] = useState(false);
  const [gap, setGap] = useState(false);
  const [bigGap, setBigGap] = useState(false);
  const [missing, setMissing] = useState(false);
  const [effective, setEffective] = useState(false);
  

  const all2 = () => setAll(!all);
  const gap2 = () => setGap(!gap);
  const bigGap2 = () => setBigGap(!bigGap);
  const missing2 = () => setMissing(!missing);
  const effective2 = () => setEffective(!effective);
 

  return (
    <div className="month">
      <div>
        <button onClick={all2}>Yes</button>
        <button onClick={gap2}>No</button>
      </div>
      {all && (
        <div>
          <p>Awesome!</p>
          <h3>Is there any of the 4 Cornerstones that they are missing?</h3>
          <div>
            <button onClick={missing2}>Yes</button>
            <button onClick={effective2}>No</button>
          </div>
        </div>
      )}
      {effective && (
        <div>
          <h3>Is there anything that we can do to make it MORE effective?</h3>
          <div>
            <h4>Quick Ideas:</h4>
            <table>
              <tr className="columns">
                <th>Get to FIN faster (ie. higher RoR)</th>
                <th>Pay less taxes</th>
                <th>Keep it safer</th>
                <th>Reduce fees</th>
                <th>Fits their timeframe better</th>
              </tr>
              <tr className="columns">
                <td>Indexed Risk Management</td>
                <td>Perm Insurance</td>
                <td>Indexed Risk Management</td>
                <td>No fee annuity</td>
                <td>Perm Insurance</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {gap && <button onClick={bigGap2}>How big of a gap is there?</button>}
      {bigGap && (
        <div>
          <p>$...</p>
          <button onClick={missing2}>
            What major cornerstones are they missing?
          </button>
        </div>
      )}
      {missing && <Missing />}
    </div>
  );
};

export default AllTheWay;
