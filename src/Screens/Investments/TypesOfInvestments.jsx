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
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="container"
          >
            <h3 className="info-button">Roth IRA - 4 Cornerstone Basics</h3>
            <FaQuestionCircle className="info-button" id="question" />
            <p className="additional-info">
              A qualified retirement plan in which earnings grow tax deferred
              and distributions are tax free. Contributions to a Roth IRA are
              generally not deductible for tax purposes, and there are income
              and contribution limits. Roth IRA contributions cannot be made by
              taxpayers with high incomes. To qualify for the tax-free and
              penalty-free withdrawal of earnings, Roth IRA distributions must
              meet a five-year holding requirement and occur after age 59½.
              Tax-free and penalty-free withdrawal also can be taken under
              certain other circumstances, such as after the owner’s death. The
              original Roth IRA owner is not required to take minimum annual
              withdrawals. In 1997, Roth IRA became part of the Taxpayer Relief
              Act, signed into law by President Clinton. The Roth IRA is named
              after Senator William Roth, a Republican senator from Delaware.
            </p>
          </div>
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
            <FaQuestionCircle className="info-button" id="question" />
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
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="container"
          >
            <h3 className="info-button">
              Traditional IRA - 4 Cornerstone Basics
            </h3>
            <FaQuestionCircle className="info-button" id="question" />
            <p className="additional-info">
              A qualified retirement account for individuals. Contributions to a
              Traditional IRA may be fully or partially deductible, depending on
              your individual circumstance. Under the SECURE Act, in most
              circumstances, once you reach age 72, you must begin taking
              required minimum distributions from a Traditional Individual
              Retirement Account (IRA). Withdrawals from Traditional IRAs are
              taxed as ordinary income, and if taken before age 59½, may be
              subject to a 10-percent federal income tax penalty. You may
              continue to contribute to a Traditional IRA past age 70½ under the
              SECURE Act as long as you meet the earned-income requirement.
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
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="container"
          >
            <h3 className="info-button">Bonds - 4 Cornerstone Basics</h3>
            <FaQuestionCircle className="info-button" id="question" />
            <p className="additional-info">
              A debt instrument under which the issuer promises to pay a
              specified amount of interest and to repay the principal at
              maturity. The market value of a bond will fluctuate with changes
              in interest rates. As rates rise, the value of existing bonds
              typically falls. If an investor sells a bond before maturity, it
              may be worth more or less than the initial purchase price. By
              holding a bond to maturity, an investor will receive the interest
              payments due plus his or her original principal, barring default
              by the issuer. Investments seeking to achieve higher yields also
              involve a higher degree of risk.
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
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="container"
          >
            <h3 className="info-button">
              Employer Sponsored Plans - 4 Cornerstone Basics
            </h3>
            <FaQuestionCircle className="info-button" id="question" />
            <p className="additional-info">
              An employer-sponsored retirement plan functions as a certain
              amount or percentage on an employee's income is deducted from
              their paycheck and is placed in a retirement account. The employer
              also has the option to contribute into the account, either by
              matching a portion of the employee's contributions (or more), by
              giving a set portion regardless of employee contribution, or by
              making a flat contribution.
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
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="container"
          >
            <h3 className="info-button">Mutual Funds - 4 Cornerstone Basics</h3>
            <FaQuestionCircle className="info-button" id="question" />
            <p className="additional-info">A pooled investment account offered by an investment company. Mutual funds pool the monies of many investors and then invest the money to pursue the fund’s stated objectives. The resulting portfolio of investments is managed by the investment company. Mutual fund balances are subject to fluctuation in value and market risk. Shares, when redeemed, may be worth more or less than their original cost. Mutual funds are sold only by prospectus. Individuals are encouraged to consider the charges, risks, expenses, and investment objectives carefully before investing. A prospectus containing this and other information about the investment company can be obtained from your financial professional. Read it carefully before you invest or send money.</p>
          </div>
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
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="container"
          >
            <h3 className="info-button">Pensions - 4 Cornerstone Basics</h3>
            <FaQuestionCircle className="info-button" id="question" />
            <p className="additional-info">
              A defined benefit plan - A specific benefit that you get for
              working for the company. A "pension is a retirement arrangement in
              which your employer promises you a regular payment from the day
              you retire, for as long as you live" "Normally, employees must
              work for an employer for a certain time period before the benefits
              they have earned belong to them. After they have done so, they are
              considered "vested" in those benefits." The "employer manages the
              investment side of funding its pension plan(s), so the employer
              bears the risk of choosing investments and the risk that the
              market will decline. Pensions differ in that respect from
              employee-managed retirement plans (such as 401(k) plans) in which
              employees choose how much to save and how to invest." - PBGC
              (https://www.pbgc.gov/about/who-we-are/retirement-matters/post/2013/04/17/What-is-a-Pension)
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
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="container"
          >
            <h3 className="info-button">IUL - 4 Cornerstone Basics</h3>
            <FaQuestionCircle className="info-button" id="question" />
            <p className="additional-info">
              Indexed Universal Life Insurance is a permanent insurance that
              offers in addition to a death benefit, the opportunity for cash
              value accumulation inside of the insurance.
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
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="container"
          >
            <h3 className="info-button">
              Accumulation Annuity - 4 Cornerstone Basics
            </h3>
            <FaQuestionCircle className="info-button" id="question" />
            <p className="additional-info">
              Accumulation annuities are insurance products that are designed to
              have high returns while usually providing downside protection.
            </p>
          </div>
          <h3></h3>
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
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="container"
          >
            <h3 className="info-button">
              Lifetime Income Annuities - 4 Cornerstone Basics
            </h3>
            <FaQuestionCircle className="info-button" id="question" />
            <p className="additional-info">
              Lifetime income annuities are an insurance product that provide a
              set amount of income for a person's lifetime with it is annuitized
              (turned on). I think of these like a self-made pension. They often
              do come with a death benefit, and some have the ability to have
              annual distribution increases to keep up with inflation.{" "}
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
