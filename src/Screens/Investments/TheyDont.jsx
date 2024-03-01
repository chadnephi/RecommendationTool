import React, { useState } from "react";
import "./investments.css";

const TheyDont = () => {
  const [rollOver, setRollOver] = useState(false);
  const [noRollOver, setNoRollOver] = useState(false);
  const [old, setOld] = useState(false);
  const [young, setYoung] = useState(false);

  const rollOver2 = () => setRollOver(!rollOver);
  const noRollOver2 = () => setNoRollOver(!noRollOver);
  const old2 = () => setOld(!old);
  const young2 = () => setYoung(!young);

  return (
    <div className="month">
      <h3>Why not?</h3>
      <ol>
        <li>Can't financially</li>
        <li>
          Not designed to continue contributing to
          <ul>
            <li>** Examples: A 401K plan from previous employer</li>
          </ul>
        </li>
      </ol>
      <h3>Can it be rolled over?</h3>
      <div>
        <button onClick={rollOver2}>Yes</button>
        <button onClick={noRollOver2}>No</button>
      </div>
      {rollOver && (
        <div>
          <p>Great!</p>
          <h3>Are they older than 30?</h3>
          <button onClick={old2}>Yes</button>
          <button onClick={young2}>No</button>
        </div>
      )}
      {noRollOver && (
        <div>
          <h3>Why not?</h3>
          <div>
            <p>Options:</p>
            <ul>
              <li>It's a pension</li>
              <li>Not through the vesting period</li>
            </ul>
            <h3 className="wait">Then just wait</h3>
          </div>
        </div>
      )}
      {old && (
        <div>
          <p>Great!</p>
          <h4 className="wait">
            A single premium fixed indexed annuity is probably a good place to
            start
          </h4>
        </div>
      )}
      {young && (
        <div>
          <h3>
            Can you move it to personal account via Betterment or use it to fund
            an IUL?
          </h3>
            <table>
              <tr className="columns">
                <th>Betterment</th>
                <th>IUL</th>
              </tr>
              <tr className="columns">
                <td>Do ...</td>
                <td>Are they ok with the taxes and penalties to move it over? If so, why?</td>
              </tr>
            </table>
        </div>
      )}
    </div>
  );
};

export default TheyDont;
