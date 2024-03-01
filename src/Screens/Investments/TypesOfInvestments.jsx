import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";

import "./investments.css";
import "../debt.css";

const TypesOfInvestments = ({ min }) => {
  return (
    <div className="type">
      <IoIosCloseCircle className="close" onClick={min} />
      <div className="types">
        <div className="tables">
          <h3>Roth IRA - 4 Cornerstone Basics</h3>
          <table>
            <tr className="columns">
              <th>About</th>
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover</th>
              <th>How to run basic numbers</th>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
            <tr className="columns">
              <td>Typically comprised of stocks / bonds/ MF</td>
              <td>Typically 4-6%</td>
              <td>Not if in stocks / bonds / mutual funds</td>
              <td>Yes</td>
              <td>Not really, not meant for EF</td>
              <td>After age: 59 1/2</td>
              <td>Anytime</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="container"
          >
            <h3 className="info-button">Stocks - 4 Cornerstone Basics</h3>
            <FaQuestionCircle className="info-button" id="question"/>
            <p className="additional-info">
              An equity investment in a company. Stockholders own a share of the
              company and are entitled to any dividends and financial
              participation in company growth. They also have the right to vote
              on the company’s board of directors. Keep in mind that the return
              and principal value of stock prices will fluctuate as market
              conditions change. And shares, when sold, may be worth more or
              less than their original cost.
            </p>
          </div>
          <table>
            <tr className="columns">
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover</th>
              <th>How to run basic numbers</th>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
            <tr className="columns">
              <td>Typically 4-6%</td>
              <td>No</td>
              <td>No</td>
              <td>Can be a form of emergency fund</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <h3>Traditional IRA - 4 Cornerstone Basics</h3>
          <table>
            <tr className="columns">
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover</th>
            </tr>
            <tr className="columns">
              <td>Typically 4-6%</td>
              <td>Not if in stocks / bonds / mutual funds</td>
              <td>Deferred</td>
              <td>Not really, not meant for EF</td>
              <td>After age: 59 1/2</td>
              <td>Anytime</td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <h3>Bonds - 4 Cornerstone Basics</h3>
          <table>
            <tr className="columns">
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover</th>
            </tr>
            <tr className="columns">
              <td>4-5%</td>
              <td>Fairly</td>
              <td>No</td>
              <td>No</td>
              <td>Depends on bond</td>
              <td>No</td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <h3>401Ks / 403bs / 457s / State R plans - 4 Cornerstone Basics</h3>
          <table>
            <tr className="columns">
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover</th>
            </tr>
            <tr className="columns">
              <td>Typically 4-6%</td>
              <td>No</td>
              <td>Deferred</td>
              <td>No</td>
              <td>After age: 59 1/2</td>
              <td>
                Usually around age 50 depends on current employment, When they
                change jobs / stop working. Or if they have any old Inv. that
                were never rolled into the current one.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <h3>Mutual Funds - 4 Cornerstone Basics</h3>
          <table>
            <tr className="columns">
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover</th>
            </tr>
            <tr className="columns">
              <td>Typically 4-6%</td>
              <td>No</td>
              <td>No</td>
              <td>Can be a form of emergency fund</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <h3>Pensions - 4 Cornerstone Basics</h3>
          <table>
            <tr className="columns">
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover</th>
            </tr>
            <tr className="columns">
              <td>Set by company</td>
              <td>Yes</td>
              <td>Deferred</td>
              <td>Depends on benefits provided by the company</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <h3>IUL - 4 Cornerstone Basics</h3>
          <table>
            <tr className="columns">
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover</th>
            </tr>
            <tr className="columns">
              <td>Typically 8% - 10%</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Depends on IUL</td>
              <td>Depends on how long they've had it.</td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <h3>Accumulation Annuity - 4 Cornerstone Basics</h3>
          <table>
            <tr className="columns">
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover</th>
            </tr>
            <tr className="columns">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <h3>Lifetime Income Annuities - 4 Cornerstone Basics</h3>
          <table>
            <tr className="columns">
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover</th>
            </tr>
            <tr className="columns">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TypesOfInvestments;
