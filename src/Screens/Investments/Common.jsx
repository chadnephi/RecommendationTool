import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./investments.css";

const Common = ({ min }) => {
  return (
    <div className="type">
      <IoIosCloseCircle className="close" onClick={min} />
      <div className="types">
        <div className="tables">
          <table>
            <tr className="columns">
              <th>What to do if they have a lump sum?</th>
              <th>What if they don't qualify for IULs?</th>
              <th>Can I roll something over?</th>
              <th>
                What's the smallest amount I can invest? Smallest premium?
              </th>
              <th>Concerns about fees</th>
              <th>Where should most people start for a strong foundation?</th>
            </tr>
          </table>
        </div>
        <div className="tables">
          <h3>Investments with minimums based on age (Rough Averages)</h3>
          <table>
            <tr className="columns">
              <th>IUL</th>
              <th>Annuities</th>
            </tr>
            <tr className="columns">
              <td>Ages 18-29: $50</td>
              <td>Can't</td>
            </tr>
            <tr className="columns">
              <td>Ages 30-59: $400</td>
              <td>Between $10K to $15K+</td>
            </tr>
            <tr className="columns">
              <td>Ages 60+: $600</td>
              <td>Between $10K to $15K+</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Common;
