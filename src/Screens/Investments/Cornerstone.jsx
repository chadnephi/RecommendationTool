import React from "react";
import "./investments.css";

const Cornerstone = () => {
  return (
    <div>
      <table>
        <tr className="columns">
          <th>Growth:</th>
          <td>Stocks</td>
          <td>MF</td>
          <td>IULs</td>
          <td>Annuities</td>
        </tr>
        <tr className="columns">
          <th>Safety:</th>
          <td>Bonds</td>
          <td>CDs</td>
          <td>IULs</td>
          <td>Annuities</td>
        </tr>
        <tr className="columns">
          <th>Tax Advantages:</th>
          <td>Roth IRA</td>
          <td>Perm Insurance</td>
          <td>NonQualified Annuity</td>
          <td>Trad IRA</td>
        </tr>
        <tr className="columns">
          <th>Protection:</th>
          <td>Emergency Funds</td>
          <td>Health Insurance</td>
          <td>Life Insurance</td>
          <td>LTC Insurance</td>
        </tr>
      </table>
    </div>
  );
};

export default Cornerstone;
