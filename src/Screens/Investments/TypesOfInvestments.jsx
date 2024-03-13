import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";

import "./investments.css";
import "../debt.css";
import { Link } from "react-router-dom";

const TypesOfInvestments = ({ min }) => {
  const [rothR, setRothR] = useState(false);
  const [rothT, setRothT] = useState(false);
  const [stockT, setStockT] = useState(false);
  const [stockR, setStockR] = useState(false);
  const [tradT, setTradT] = useState(false);
  const [tradR, setTradR] = useState(false);
  const [bondT, setBondT] = useState(false);
  const [bondR, setBondR] = useState(false);
  const [empT, setEmpT] = useState(false);
  const [empR, setEmpR] = useState(false);
  const [mutualT, setMutualT] = useState(false);
  const [mutualR, setMutualR] = useState(false);
  const [pensionT, setPensionT] = useState(false);
  const [pensionR, setPensionR] = useState(false);
  const [iulT, setIulT] = useState(false);
  const [iulR, setIulR] = useState(false);
  const [accumT, setAccumT] = useState(false);
  const [accumR, setAccumR] = useState(false);
  const [lifeT, setLifeT] = useState(false);
  const [lifeR, setLifeR] = useState(false);

  const rothR2 = () => setRothR(!rothR);
  const rothT2 = () => setRothT(!rothT);
  const stockT2 = () => setStockT(!stockT);
  const stockR2 = () => setStockR(!stockR);
  const tradT2 = () => setTradT(!tradT);
  const tradR2 = () => setTradR(!tradR);
  const bondT2 = () => setBondT(!bondT);
  const bondR2 = () => setBondR(!bondR);
  const empT2 = () => setEmpT(!empT);
  const empR2 = () => setEmpR(!empR);
  const mutualT2 = () => setMutualT(!mutualT);
  const mutualR2 = () => setMutualR(!mutualR);
  const pensionT2 = () => setPensionT(!pensionT);
  const pensionR2 = () => setPensionR(!pensionR);
  const iulT2 = () => setIulT(!iulT);
  const iulR2 = () => setIulR(!iulR);
  const accumT2 = () => setAccumT(!accumT);
  const accumR2 = () => setAccumR(!accumR);
  const lifeT2 = () => setLifeT(!lifeT);
  const lifeR2 = () => setLifeR(!lifeR);
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
          <div className="risks">
            <button onClick={rothT2}>Types</button>
            <button onClick={rothR2}>Risks</button>
            {rothT && (
              <div className="risk">
                Since this is a tax status, you can apply this status to
                multiple types of investments, so long as it follows the tax
                rules. Typically comprised of stocks / bonds/ MF.
              </div>
            )}
            {rothR && (
              <div className="risk">
                <ul>
                  <li>
                    The main risks for Roth IRAs deal with whatever funds are
                    comprising this account.
                  </li>
                  <li>
                    In addition to that, certain income levels are barred from
                    contributing to an existing Roth or creating a new one.
                  </li>
                  <li>
                    You also have the contribution limitation and cannot
                    contribute to more than one roth per social security number.
                  </li>
                </ul>
              </div>
            )}
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
            </tr>
            <tr className="columns">
              <td>Typically comprised of stocks / bonds/ MF</td>
              <td>Typically 4-6%</td>
              <td>Not if in stocks / bonds / mutual funds</td>
              <td>Yes - Tax deferred growth and tax free withdrawals</td>
              <td>Not really, not meant for EF</td>
              <td>After age: 59 1/2</td>
              <td>Anytime</td>
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
          <div className="risks">
            <button onClick={stockT2}>Types</button>
            <button onClick={stockR2}>Risks</button>
            {stockT && (
              <div className="risk">
                <p>
                  <span style={{ fontWeight: "bold" }}>Common Stocks:</span>{" "}
                  These are the most typical type of stock that represents
                  ownership in a company. Common stockholders usually have
                  voting rights and may receive dividends, but their claims on
                  assets and earnings are subordinate to preferred stockholders
                  and bondholders in the event of liquidation.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Preferred Stocks:</span>{" "}
                  Preferred stockholders have a higher claim on the company's
                  assets and earnings compared to common stockholders. They
                  typically receive fixed dividends and may have priority over
                  common stockholders in terms of dividend payments and asset
                  distribution in case of liquidation. However, they usually
                  don't have voting rights.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Blue-Chip Stocks:</span>{" "}
                  These are stocks of large, well-established, financially
                  stable companies with a history of consistent performance.
                  Blue-chip stocks are considered relatively safe investments
                  and often pay dividends.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Growth Stocks:</span>{" "}
                  Growth stocks are shares of companies that are expected to
                  grow at an above-average rate compared to other companies in
                  the market. These companies typically reinvest their earnings
                  into expansion rather than paying dividends, and investors buy
                  these stocks with the expectation of capital appreciation.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Value Stocks:</span>{" "}
                  Value stocks are shares of companies that are considered
                  undervalued by the market based on fundamental analysis.
                  Investors in value stocks believe that the market has
                  undervalued the stock and that its price will eventually rise
                  to reflect its true value.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Income Stocks:</span>{" "}
                  Income stocks are stocks that typically pay high dividends
                  relative to their share price. These stocks are favored by
                  investors seeking regular income from their investments, such
                  as retirees.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Cyclical Stocks:</span>{" "}
                  Cyclical stocks are shares of companies whose performance is
                  closely tied to the economic cycle. These companies often see
                  their fortunes rise and fall with changes in the economy.
                  Examples include companies in the automotive, construction,
                  and travel industries.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Defensive Stocks:</span>{" "}
                  Defensive stocks are shares of companies that tend to perform
                  well even during economic downturns. These companies provide
                  goods and services that are essential or have relatively
                  stable demand regardless of economic conditions. Examples
                  include companies in the healthcare, utilities, and consumer
                  staples sectors.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Small-Cap, Mid-Cap, and Large-Cap Stocks:
                  </span>{" "}
                  Stocks can also be classified based on the market
                  capitalization of the issuing company. Small-cap stocks have a
                  smaller market capitalization, mid-cap stocks have a moderate
                  market capitalization, and large-cap stocks have the largest
                  market capitalization.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Sector Stocks:</span>{" "}
                  Stocks can also be categorized based on the sector or industry
                  to which the issuing company belongs, such as technology,
                  healthcare, finance, consumer goods, etc.
                </p>
                <h3 className="tip" style={{ margin: "auto" }}>
                  These classifications are not mutually exclusive, and many
                  stocks can fall into multiple categories simultaneously.
                  Investors often build diversified portfolios by investing in
                  stocks from various types to manage risk and achieve their
                  investment goals.
                </h3>
              </div>
            )}
            {stockR && (
              <div className="risk">
                <p>
                  <span style={{ fontWeight: "bold" }}>Market Risk:</span>{" "}
                  Market risk, also known as systematic risk, refers to the risk
                  of overall market fluctuations affecting the value of stocks.
                  Factors such as economic conditions, geopolitical events,
                  interest rates, and investor sentiment can influence stock
                  prices.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Company-Specific Risk:
                  </span>{" "}
                  Also known as unsystematic risk, this type of risk is specific
                  to individual companies and industries. Factors such as poor
                  management decisions, changes in industry regulations,
                  lawsuits, or product recalls can adversely affect the
                  performance of a particular stock.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Liquidity Risk:</span>{" "}
                  Liquidity risk refers to the risk of not being able to buy or
                  sell a stock quickly at its current market price. Stocks with
                  low trading volumes or small market capitalizations may have
                  higher liquidity risk, which can result in wider bid-ask
                  spreads and increased price volatility.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Volatility Risk:</span>{" "}
                  Volatility risk refers to the degree of variation in the price
                  of a stock over time. High volatility can lead to rapid and
                  unpredictable price fluctuations, which may increase the
                  chances of experiencing significant gains or losses in a short
                  period.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Interest Rate Risk:
                  </span>{" "}
                  Changes in interest rates can affect stock prices,
                  particularly those of interest-sensitive sectors such as
                  financials and utilities. Rising interest rates may lead to
                  higher borrowing costs for companies, which can impact their
                  profitability and stock valuations.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Currency Risk:</span> For
                  investors holding stocks denominated in foreign currencies,
                  currency risk arises from fluctuations in exchange rates.
                  Changes in exchange rates can affect the value of foreign
                  investments when converted back into the investor's home
                  currency.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Inflation Risk:</span>{" "}
                  Inflation erodes the purchasing power of money over time,
                  which can impact the real returns of stock investments.
                  Companies may struggle to maintain profitability in an
                  inflationary environment if they cannot pass on increased
                  costs to consumers through higher prices.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Political and Regulatory Risk:
                  </span>{" "}
                  Political instability, changes in government policies, and
                  regulatory developments can impact the business environment
                  and affect the performance of stocks, especially in industries
                  subject to heavy government oversight or regulation.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Event Risk:</span> Event
                  risk refers to the risk of unforeseen events, such as natural
                  disasters, terrorist attacks, or pandemics, which can have
                  significant and sudden impacts on stock prices and market
                  sentiment.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Psychological Bias Risk:
                  </span>{" "}
                  Investors may be susceptible to psychological biases such as
                  herd mentality, overconfidence, or loss aversion, which can
                  influence their investment decisions and lead to suboptimal
                  outcomes.
                </p>
              </div>
            )}
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
          <div className="risks">
            <button onClick={tradT2}>Types</button>
            <button onClick={tradR2}>Risks</button>
            {tradT && (
              <div className="risk">
                Since this is a tax status, you can apply this status to
                multiple types of investments, so long as it follows the tax
                rules. Typically comprised of stocks / bonds/ MF.
              </div>
            )}
            {tradR && (
              <div className="risk">
                <p>
                  <span style={{ fontWeight: "bold" }}>Market risk:</span>{" "}
                  Investments held within a traditional IRA are subject to
                  market fluctuations. The value of your investments can rise or
                  fall based on the performance of the underlying assets, such
                  as stocks, bonds, or mutual funds. Market volatility can
                  affect the growth of your retirement savings and may result in
                  potential losses, especially if you're heavily invested in
                  volatile assets.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Inflation risk:</span>{" "}
                  Inflation erodes the purchasing power of money over time.
                  While tax-deferred growth within a traditional IRA can help
                  your savings grow, it's essential to consider whether your
                  investments are keeping pace with inflation. If the rate of
                  return on your investments doesn't outpace inflation, your
                  retirement savings may not be sufficient to cover your
                  expenses in the future.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Tax risk:</span> Although
                  contributions to a traditional IRA may be tax-deductible,
                  withdrawals during retirement are subject to income tax. If
                  tax rates increase in the future or your income tax bracket
                  changes, you could end up paying higher taxes on your
                  retirement withdrawals than you initially anticipated.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Early withdrawal penalties:
                  </span>{" "}
                  Withdrawals from a traditional IRA before age 59½ are
                  generally subject to a 10% early withdrawal penalty, in
                  addition to income tax. While there are exceptions for certain
                  qualifying events, such as disability or first-time home
                  purchase, early withdrawals can significantly reduce your
                  retirement savings and hinder your long-term financial goals.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Required minimum distributions (RMDs):
                  </span>{" "}
                  Once you reach age 72 (as of 2022), you are generally required
                  to start taking withdrawals from your traditional IRA, known
                  as Required Minimum Distributions (RMDs). Failure to withdraw
                  the required amount can result in hefty IRS penalties. RMDs
                  may also increase your taxable income, potentially pushing you
                  into a higher tax bracket.
                </p>
              </div>
            )}
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
          <div className="risks">
            <button onClick={bondT2}>Types</button>
            <button onClick={bondR2}>Risks</button>
            {bondT && (
              <div className="risk">
                <ul>
                  <li>Government bonds</li>
                  <li>Municipal bonds</li>
                  <li>International bonds</li>
                  <li>Corporate bonds</li>
                </ul>
              </div>
            )}
            {bondR && (
              <div className="risk">
                <p>
                  <span style={{ fontWeight: "bold" }}>Credit Risk:</span> One
                  of the primary risks associated with bonds is credit risk,
                  which refers to the likelihood that the issuer will default on
                  its debt obligations and fail to make interest payments or
                  repay the principal. Government bonds, particularly those
                  issued by stable governments with strong credit ratings like
                  U.S. Treasury bonds, are generally considered to have minimal
                  credit risk. On the other hand, corporate bonds, especially
                  those rated below investment-grade (junk bonds), may carry
                  higher credit risk.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Interest Rate Risk:
                  </span>{" "}
                  Bonds are subject to interest rate risk, meaning their prices
                  can fluctuate inversely with changes in interest rates. When
                  interest rates rise, bond prices typically fall, and vice
                  versa. This risk is particularly relevant for bonds with
                  longer maturities because they are more sensitive to changes
                  in interest rates.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Inflation Risk:</span>{" "}
                  Bonds also face inflation risk, which refers to the risk that
                  the purchasing power of the bond's future interest payments
                  and principal repayment will be eroded by inflation. Inflation
                  can reduce the real return of fixed-income investments like
                  bonds.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Liquidity Risk:</span>{" "}
                  Some bonds may have limited liquidity, meaning they cannot be
                  easily bought or sold without significantly affecting their
                  price. This can be a concern for investors who may need to
                  sell their bonds before maturity.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Call Risk:</span>{" "}
                  Callable bonds give the issuer the right to redeem the bond
                  before its maturity date, typically when interest rates have
                  fallen. This exposes investors to call risk, as they may have
                  to reinvest the proceeds at lower interest rates.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Event Risk:</span> Event
                  risk refers to the possibility of adverse events impacting the
                  issuer's ability to make payments on the bond. These events
                  could include bankruptcy, regulatory changes, or other
                  unforeseen circumstances.
                </p>
              </div>
            )}
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
              <td>1-5%</td>
              <td>Fairly</td>
              <td>Not by themselves</td>
              <td>Doesn't offer protection from emergencies or major events</td>
              <td>Depends on bond</td>
              <td>
                Often times you are able to sell your bonds and reinvest the
                funds into another investment{" "}
              </td>
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
          <div className="risks">
            <button onClick={empT2}>Types</button>
            <button onClick={empR2}>Risks</button>
            {empT && (
              <div className="risk">
                <p>
                  <span style={{ fontWeight: "bold" }}>401(k) Plan:</span> This
                  is one of the most common retirement plans offered by
                  employers. Employees can contribute a portion of their pre-tax
                  salary to the plan, and often employers match a percentage of
                  these contributions. Traditional 401(k) plans allow for
                  tax-deferred growth, meaning taxes are paid upon withdrawal
                  during retirement. Roth 401(k) plans are also available, where
                  contributions are made after-tax, but withdrawals in
                  retirement are tax-free.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>403(b) Plan:</span> This
                  plan is similar to a 401(k) but is typically offered by public
                  schools, universities, non-profits, and certain other
                  tax-exempt organizations. Employees can contribute pre-tax
                  income, and some employers offer matching contributions.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>457 Plan:</span> These
                  are deferred compensation plans offered by state and local
                  governments and some non-profit organizations. They are
                  similar to 401(k) plans but have different withdrawal rules,
                  often allowing penalty-free withdrawals starting at age 59 ½
                  without the typical 10% early withdrawal penalty.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Defined Benefit Pension Plan:
                  </span>{" "}
                  In this type of plan, the employer commits to providing a
                  specified retirement benefit to employees based on a formula
                  that usually considers salary history and years of service.
                  The employer bears the investment risk and is responsible for
                  funding the plan.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Profit-Sharing Plan:
                  </span>{" "}
                  Employers contribute a portion of their profits to this plan,
                  which is allocated to employees based on a predetermined
                  formula. Contributions are often discretionary and can vary
                  from year to year.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Employee Stock Ownership Plan (ESOP):
                  </span>{" "}
                  ESOPs are retirement plans that invest primarily in the
                  employer's stock. Companies contribute shares of their stock
                  to the plan, which are allocated to employee accounts. ESOPs
                  can provide employees with an ownership stake in the company.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    SIMPLE IRA (Savings Incentive Match Plan for Employees):
                  </span>{" "}
                  This plan is available to small businesses with 100 or fewer
                  employees. It allows both employer and employee contributions.
                  Employers are required to make either matching contributions
                  or non-elective contributions on behalf of eligible employees.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    SEP IRA (Simplified Employee Pension IRA):
                  </span>{" "}
                  This plan allows self-employed individuals and small business
                  owners to make tax-deductible contributions to traditional
                  IRAs (Individual Retirement Accounts) for themselves and their
                  employees.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Cash Balance Plan:</span>{" "}
                  This is a type of defined benefit plan that resembles a
                  defined contribution plan. Employees receive annual statements
                  showing a "hypothetical account balance," which grows with
                  employer contributions and an interest credit. Upon
                  retirement, employees receive either the hypothetical account
                  balance or an annuity based on that balance.
                </p>
              </div>
            )}
            {empR && (
              <div className="risk">
                <p>
                  <span style={{ fontWeight: "bold" }}>Investment Risk:</span>{" "}
                  One of the primary risks associated with employer-sponsored
                  retirement plans is investment risk. The value of investments
                  within the plan can fluctuate based on market conditions,
                  economic factors, and the performance of the chosen
                  investments. Poor investment decisions or market downturns can
                  lead to a decline in the value of the retirement savings.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Contribution Risk:</span>{" "}
                  Employers may choose to match employee contributions to
                  retirement plans, but there's no guarantee that they will
                  continue to do so in the future. Changes in the company's
                  financial situation or corporate policies could result in
                  reductions or eliminations of employer contributions,
                  impacting the growth of employees' retirement savings.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Administrative Risk:
                  </span>{" "}
                  Plan administration involves tasks such as recordkeeping,
                  compliance monitoring, and reporting. Errors or inefficiencies
                  in plan administration could lead to delays in contributions,
                  inaccurate recordkeeping, or compliance issues, potentially
                  resulting in penalties or legal liabilities for both employers
                  and employees.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Regulatory Risk:</span>{" "}
                  Retirement plans are subject to various regulations and tax
                  laws. Changes in regulations or tax laws could affect the
                  operation, design, or tax treatment of employer-sponsored
                  plans. Employers and employees may need to adjust their
                  retirement planning strategies in response to regulatory
                  changes, which could impact retirement savings goals.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Fees and Expenses:</span>{" "}
                  Employer-sponsored retirement plans often involve fees and
                  expenses associated with investment management,
                  administration, and other services. High fees can eat into
                  investment returns over time, reducing the growth of
                  retirement savings. It's essential for employers and employees
                  to understand the fee structure of the plan and consider the
                  impact of fees on investment returns.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Lack of Diversification:
                  </span>{" "}
                  Some retirement plans may offer a limited selection of
                  investment options. Without adequate diversification across
                  different asset classes and investment strategies,
                  participants may be exposed to heightened investment risk.
                  Employers and employees should carefully review the investment
                  options available within the plan and consider diversification
                  strategies.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Legal and Fiduciary Responsibilities:
                  </span>{" "}
                  Employers who sponsor retirement plans have legal and
                  fiduciary responsibilities to act in the best interests of
                  plan participants. Failure to fulfill these responsibilities
                  could result in lawsuits, penalties, or other legal
                  consequences. Employers should ensure they understand their
                  fiduciary duties and fulfill them appropriately.
                </p>
              </div>
            )}
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
              <td>
                Typically 4-7% actual returns (
                <span>
                  <Link
                    to="https://docs.google.com/spreadsheets/d/1bHYstKfUg-UeWPowp4vAPQ5IXmdN-ljG/edit#gid=1075518454"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "underline" }}
                  >
                    see Averages vs Actuals
                  </Link>
                </span>
                )
              </td>
              <td>Variable risk management</td>
              <td>Tax deferred. Some 401Ks can also have Roth tax status</td>
              <td>No</td>
              <td>After age: 59 1/2</td>
              <td>
                If the account is inactive then yes. That means when they change
                jobs / stop working at the previous place that created the
                retirement account. Or if they have any old 401K or employer
                sponsored plans that were never rolled into the current one.
                <span style={{ fontWeight: "bold" }}> Note:</span> No
                contributions to a plan where they currently work, does NOT
                count towards it being inactive. If active, then usually around
                age 50 or older (depends on current employer) they are able to
                do what's called an internal transfer / roll over.
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
            <p className="additional-info">
              A pooled investment account offered by an investment company.
              Mutual funds pool the monies of many investors and then invest the
              money to pursue the fund’s stated objectives. The resulting
              portfolio of investments is managed by the investment company.
              Mutual fund balances are subject to fluctuation in value and
              market risk. Shares, when redeemed, may be worth more or less than
              their original cost. Mutual funds are sold only by prospectus.
              Individuals are encouraged to consider the charges, risks,
              expenses, and investment objectives carefully before investing. A
              prospectus containing this and other information about the
              investment company can be obtained from your financial
              professional. Read it carefully before you invest or send money.
            </p>
          </div>
          <div className="risks">
            <button onClick={mutualT2}>Types</button>
            <button onClick={mutualR2}>Risks</button>
            {mutualT && (
              <div className="risk">
                <p>
                  <span style={{ fontWeight: "bold" }}>Equity Funds:</span>{" "}
                  These funds invest primarily in stocks or equity securities.
                  They are further classified based on market capitalization
                  (large-cap, mid-cap, small-cap), sector focus (technology,
                  healthcare, etc.), or investment style (growth, value, blend).
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Fixed-Income Funds:
                  </span>{" "}
                  Also known as bond funds, these invest in fixed-income
                  securities such as government or corporate bonds. They can
                  vary in terms of duration, credit quality, and type of bonds
                  (government, corporate, municipal).
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Money Market Funds:
                  </span>{" "}
                  These funds invest in short-term, highly liquid securities
                  such as treasury bills, certificates of deposit (CDs), and
                  commercial paper. Money market funds aim to provide capital
                  preservation and liquidity.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Balanced or Hybrid Funds:
                  </span>{" "}
                  These funds invest in a mix of asset classes, typically a
                  combination of stocks, bonds, and cash equivalents. They aim
                  to provide both capital appreciation and income while managing
                  risk.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Index Funds:</span> These
                  funds aim to replicate the performance of a specific market
                  index, such as the S&P 500 or the Dow Jones Industrial
                  Average. They offer broad market exposure and generally have
                  lower expense ratios compared to actively managed funds.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Sector Funds:</span>{" "}
                  These funds focus on specific sectors of the economy, such as
                  technology, healthcare, energy, or real estate. They aim to
                  capitalize on opportunities within a particular industry or
                  sector.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Target-Date Funds:</span>{" "}
                  Also known as lifecycle funds, these funds automatically
                  adjust their asset allocation based on the investor's target
                  retirement date. They typically start with a higher allocation
                  to equities and gradually shift towards more conservative
                  investments as the target date approaches.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    International or Global Funds:
                  </span>{" "}
                  These funds invest in securities outside the investor's home
                  country. They may focus on a specific region (e.g., emerging
                  markets, Europe, Asia) or have a global mandate, investing
                  across various countries and regions.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Specialty Funds:</span>{" "}
                  These funds invest in specialized assets or follow unique
                  investment strategies, such as real estate investment trusts
                  (REITs), commodities, precious metals, or socially responsible
                  investing (SRI) funds.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Alternative Funds:</span>{" "}
                  These funds employ non-traditional investment strategies such
                  as long-short equity, market-neutral, managed futures, or
                  alternative assets like hedge funds. They aim to provide
                  diversification and potentially lower correlation to
                  traditional asset classes.
                </p>
                <h3 className="tip" style={{ margin: "auto" }}>
                  These are just some of the many types of mutual funds
                  available in the market, and investors should carefully
                  consider their investment objectives, risk tolerance, and time
                  horizon when selecting mutual funds for their portfolios.
                </h3>
              </div>
            )}
            {mutualR && (
              <div className="risk">
                <p>
                  <span style={{ fontWeight: "bold" }}>Market Risk:</span>{" "}
                  Mutual funds are subject to market risk, meaning the value of
                  the fund's investments can fluctuate due to changes in market
                  conditions, economic factors, and investor sentiment. This
                  risk affects all types of mutual funds regardless of their
                  investment objectives.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Interest Rate Risk:
                  </span>{" "}
                  Fixed-income mutual funds, such as bond funds, are susceptible
                  to interest rate risk. When interest rates rise, bond prices
                  typically fall, leading to a decline in the fund's net asset
                  value (NAV). Conversely, when interest rates fall, bond prices
                  generally rise, benefiting bond funds.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Credit Risk:</span> Bond
                  funds also face credit risk, which is the risk of default by
                  the issuer of the bonds held in the fund. Lower-quality bonds,
                  such as high-yield or junk bonds, carry higher credit risk
                  compared to investment-grade bonds.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Liquidity Risk:</span>{" "}
                  Some mutual funds, especially those investing in less liquid
                  assets such as small-cap stocks, emerging market securities,
                  or certain types of bonds, may face liquidity risk. This risk
                  arises when the fund encounters difficulty selling its
                  investments at fair market prices, potentially leading to
                  wider bid-ask spreads or price discounts.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Manager Risk:</span>{" "}
                  Actively managed mutual funds rely on the expertise of fund
                  managers to make investment decisions. Manager risk refers to
                  the risk that the fund manager's investment decisions may
                  underperform or deviate from the fund's stated objectives,
                  leading to poor performance relative to benchmarks or peer
                  funds.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Concentration Risk:
                  </span>{" "}
                  Funds that concentrate their investments in specific sectors,
                  industries, or regions are exposed to concentration risk. If
                  the chosen sector or region experiences adverse developments,
                  such as regulatory changes, economic downturns, or
                  geopolitical events, the fund's performance may suffer
                  disproportionately.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Inflation Risk:</span>{" "}
                  Inflation erodes the purchasing power of money over time.
                  Mutual funds that fail to generate returns that outpace
                  inflation may not adequately preserve investors' wealth in
                  real terms, particularly for funds with low or negative real
                  returns.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Redemption Risk:</span>{" "}
                  In open-end mutual funds, investors can redeem their shares at
                  any time. If a large number of investors simultaneously redeem
                  their shares during a market downturn or due to other reasons,
                  the fund may need to sell assets at unfavorable prices to meet
                  redemption requests, potentially harming remaining investors.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Expense Ratio Risk:
                  </span>{" "}
                  Mutual funds charge fees and expenses for management,
                  administration, and other operational costs. High expense
                  ratios can erode returns over time, especially for funds with
                  relatively low returns or when compared to lower-cost
                  alternatives such as index funds or ETFs.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Regulatory and Tax Risks:
                  </span>{" "}
                  Changes in regulations governing mutual funds or tax laws can
                  impact fund performance and investors' tax liabilities. For
                  example, changes in capital gains tax rates or tax treatment
                  of dividends may affect after-tax returns for investors.
                </p>
              </div>
            )}
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
              <td>
                Typically 4-7% actual returns (
                <span>
                  <Link
                    to="https://docs.google.com/spreadsheets/d/1bHYstKfUg-UeWPowp4vAPQ5IXmdN-ljG/edit#gid=1075518454"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "underline" }}
                  >
                    see Averages vs Actuals
                  </Link>
                </span>
                )
              </td>
              <td>Variable risk management</td>
              <td>Not by themselves</td>
              <td>Can be a form of emergency fund</td>
              <td>Usually</td>
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
          <div className="risks">
            <button onClick={pensionT2}>Types</button>
            <button onClick={pensionR2}>Risks</button>
            {pensionT && (
              <div className="risk">
                <p>
                  There aren't really different types of pensions, but there are
                  different ways that companies calculate how much to give you
                  from the pension. Often times it's (years of service) x (a
                  multiplier) x (final average salary).
                </p>
                <Link
                  to="https://equable.org/pension-basics-how-pension-benefits-are-calculated/"
                  target="_blank"
                  style={{ textDecorationLine: "underline", color: "black" }}
                >
                  Pension Basics
                </Link>
              </div>
            )}
            {pensionR && (
              <div className="risk">
                <p>
                  <span style={{ fontWeight: "bold" }}>Market Risk:</span>{" "}
                  Pension funds are often invested in various financial
                  instruments, such as stocks and bonds. Market fluctuations can
                  affect the value of these investments, potentially leading to
                  losses, especially if the market experiences downturns close
                  to retirement age.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Inflation Risk:</span> If
                  the pension payments are fixed or increase only slightly over
                  time, they may not keep pace with inflation. This could result
                  in a decrease in purchasing power, reducing the standard of
                  living for retirees over time.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Longevity Risk:</span>{" "}
                  Pension payments are typically guaranteed for life, but
                  spouses of pensionnaires may not continue to receive the
                  pension funds if the pensionare passes away. This poses a risk
                  of running out of funds later in life, especially if the
                  pension is the primary or sole source of retirement income.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Employer Solvency Risk:
                  </span>{" "}
                  Defined benefit pension plans are dependent on the financial
                  health of the employer. If the company sponsoring the pension
                  plan experiences financial difficulties or goes bankrupt,
                  there may be concerns about the ability of the pension plan to
                  fulfill its obligations.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Policy and Legislative Risk:
                  </span>{" "}
                  Changes in government policies and legislation related to
                  pensions can impact the benefits received. For instance,
                  changes in retirement age, taxation of pension income, or
                  adjustments to pension benefits could affect retirees'
                  financial plans.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Healthcare Costs:</span>{" "}
                  As retirees age, healthcare expenses tend to increase. Pension
                  plans may not cover all medical costs, especially if retirees
                  require long-term care or expensive medical treatments.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Dependency Risk:</span>{" "}
                  Relying solely on a pension for retirement income may limit
                  financial flexibility. Diversifying income sources, such as
                  through savings, investments, or part-time work, can provide
                  additional security and flexibility in managing expenses
                  during retirement.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Currency Risk:</span> For
                  individuals receiving a pension in a currency different from
                  their living expenses, fluctuations in exchange rates can
                  impact the purchasing power of their pension income,
                  potentially leading to unforeseen financial challenges.
                </p>
              </div>
            )}
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
              <td>Determined by the company</td>
              <td>
                The employer takes on the risk of managing the funds in such a
                way to provide lifetime income. Should the funds be mismanaged,
                there is potential for your pension to be reduced in the future.{" "}
                <span>
                  <Link
                    to="https://www.youtube.com/watch?v=4Gndxc5aaGM&t=404s"
                    target="_blank"
                    style={{ textDecorationLine: "underline", color: "black" }}
                  >
                    Who stole my pension?
                  </Link>
                </span>
              </td>
              <td>Deferred - Taxed at distributions</td>
              <td>
                Not designed to be used as an emergency fund. Typically heavy
                fees for trying to withdrawal from the account.
              </td>
              <td>None</td>
              <td>
                Normally no. Now if they've left the company and the company is
                offering an option to take a lump sum vs taking lifetime income
                from it, then yes there's a possibility to roll the funds over.{" "}
              </td>
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
          <div className="risks">
            <button onClick={iulT2}>Types</button>
            <button onClick={iulR2}>Risks</button>
            {iulT && (
              <div className="risk">
                There are multiple ways to structure an IUL.
              </div>
            )}
            {iulR && (
              <div className="risk">
                <p>
                  Getting an IUL that has low participation rates, low caps, or
                  the indexes don't perform well.
                </p>
                <p>
                  Not funding it adequately (only ever paying the minimum) and
                  having it become just expensive life insurance.
                </p>
                <p>
                  Not being able to fund the IUL early on and having it lapse
                  and use up the cash value.
                </p>
                <p>
                  Trying to withdrawal the funds before the vesting period and
                  dealing with surrender charges / fees.
                </p>
              </div>
            )}
          </div>
          <table>
            <tr className="columns">
              <th>Growth</th>
              <th>Safety</th>
              <th>Tax Advantage</th>
              <th>Protection</th>
              <th>Liquidity</th>
              <th>Rollover (it's a 1035 in this case)</th>
            </tr>
            <tr className="columns">
              <td>Typically 8% - 10%</td>
              <td>Yes - It has upside potential with downside protection</td>
              <td>
                Yes - Tax Deferred Growth with Tax Advantaged (free) withdrawals
              </td>
              <td>
                Yes - Often the come with living benefits (chronic, critical,
                terminal illness, and LTC (long term care) riders) in addition
                to the death benefit
              </td>
              <td>
                Depends on IUL, length of time that you've owned it, and
                contributions.
              </td>
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
          <div className="risks">
            <button onClick={accumT2}>Types</button>
            <button onClick={accumR2}>Risks</button>
            {accumT && (
              <div className="risk">
                There are many different ways to structure an Accumulation
                Annuity
              </div>
            )}
            {accumR && (
              <div className="risk">
                <p>
                  Possible that they outlive their accumulation annuity funds,
                  if it does not provide lifetime income.
                </p>
                <p>
                  Not great for liquidity, so if funds are needed too soon,
                  surrender charges apply.
                </p>
                <p>Possibly lower returns if the market does poorly.</p>
              </div>
            )}
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
              <td>Depends on the annuity / company. Typically 12% - 15%+</td>
              <td>Yes - Normally fixed or fixed indexed</td>
              <td>
                Yes, they are whatever tax status of the funds going into it
                (ie. a roth fund = a roth annuity). If funds have a taxable
                status (as opposed to deferred or exempt), then it's a
                nonqualified annuity. These annuities the growth is deferred and
                then the growth is taxed at distribution (but not the initial
                premiums since those have already been taxed).
              </td>
              <td>Not designed for emergencies or short term investing.</td>
              <td>
                Not liquid. Especially in the surrender (vesting) period. That
                said, even during the surrender period, most annuities have a
                percentage that you are able to pull out free of surrender
                charges.
              </td>
              <td>
                Depends on how long they've had it. You will want to make sure
                that it's outside of the vesting period.
              </td>
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
              annual distribution increases to keep up with inflation.
            </p>
          </div>
          <div className="risks">
            <button onClick={lifeT2}>Types</button>
            <button onClick={lifeR2}>Risks</button>
            {lifeT && (
              <div className="risk">
                There are many ways to structure a Lifetime Income Annuity.
              </div>
            )}
            {lifeR && (
              <div className="risk">
                <p>
                  Possible that the Lifetime income annuity income does not keep
                  up with inflation.
                </p>
                <p>
                  Not great for liquidity, so if funds are needed too soon,
                  surrender charges apply.
                </p>
                <p>Possibly lower returns if the market does poorly.</p>
              </div>
            )}
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
              <td>Depends on the annuity / company. Typically 8% - 10%</td>
              <td>Yes - Normally fixed or fixed indexed</td>
              <td>
                Yes, they are whatever tax status of the funds going into it
                (ie. a roth fund = a roth annuity). If funds have a taxable
                status (as opposed to deferred or exempt), then it's a
                nonqualified annuity. These annuities the growth is deferred and
                then the growth is taxed at distribution (but not the initial
                premiums since those have already been taxed).
              </td>
              <td>
                Yes - Protection from living too long and outliving your funds.
                Additionally, they can come with LTC riders to help with needing
                long term care.
              </td>
              <td>
                Not liquid. Especially in the surrender (vesting) period. That
                said, even during the surrender period, most annuities have a
                percentage that you are able to pull out free of surrender
                charges.
              </td>
              <td>
                Depends on how long they've had it. You will want to make sure
                that it's outside of the vesting period.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TypesOfInvestments;
