import React, { useState } from "react";
import "./midTermGoals.css";
import "./debt.css";

const MidTermGoals = () => {
  const [helpKids, setHelpKids] = useState(false);
  const [house, setHouse] = useState(false);
  const [car, setCar] = useState(false);
  const [funds, setFunds] = useState(false);
  const [college, setCollege] = useState(false);
  const [weddings, setWeddings] = useState(false);
  const [missions, setMissions] = useState(false);
  const [longTerm, setLongTerm] = useState(false);
  const [childIul, setChildIul] = useState(false);
  const [roth, setRoth] = useState(false);
  // const [savings, setSavings] = useState(false);
  const [education, setEducation] = useState(false);
  const [account, setAccount] = useState(false);
  const [ave, setAve] = useState(false);
  const [csp, setCsp] = useState(false);
  const [ptp, setPtp] = useState(false);
  const [tax, setTax] = useState(false);
  const [flexy, setFlexy] = useState(false);
  const [high, setHigh] = useState(false);
  const [control, setControl] = useState(false);
  const [restrict, setRestrict] = useState(false);
  const [noFlexy, setNoFlexy] = useState(false);
  const [limited, setLimited] = useState(false);
  const [penalty, setPenalty] = useState(false);
  const [impact, setImpact] = useState(false);
  const [state, setState] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [market, setMarket] = useState(false);
  const [next529, setNext529] = useState(false);
  const [key, setKey] = useState(false);
  const [income, setIncome] = useState(false);
  const [portable, setPortable] = useState(false);
  const [keyCon, setKeyCon] = useState(false);
  const [keyLimits, setKeyLimits] = useState(false);
  const [qualified, setQualified] = useState(false);
  const [eligible, setEligible] = useState(false);
  const [keyInvestments, setKeyInvestments] = useState(false);
  const [keyControl, setKeyControl] = useState(false);
  const [conLim, setConLim] = useState(false);
  const [taxBen, setTaxBen] = useState(false);
  const [aveFunds, setAveFunds] = useState(false);
  const [aveInvestments, setAveInvestments] = useState(false);
  const [aveCon, setAveCon] = useState(false);
  // const [ptp, setPtp] = useState(false);
  // const [ptp, setPtp] = useState(false);

  const helpKids2 = () => setHelpKids(!helpKids);
  const house2 = () => setHouse(!house);
  const car2 = () => setCar(!car);
  const funds2 = () => setFunds(!funds);
  const college2 = () => setCollege(!college);
  const weddings2 = () => setWeddings(!weddings);
  const missions2 = () => setMissions(!missions);
  const longTerm2 = () => setLongTerm(!longTerm);
  const childIul2 = () => setChildIul(!childIul);
  const roth2 = () => setRoth(!roth);
  // const savings2 = () => setSavings(!savings);
  const education2 = () => setEducation(!education);
  const account2 = () => setAccount(!account);
  const ave2 = () => setAve(!ave);
  const csp2 = () => setCsp(!csp);
  const ptp2 = () => setPtp(!ptp);
  const tax2 = () => setTax(!tax);
  const flexy2 = () => setFlexy(!flexy);
  const high2 = () => setHigh(!high);
  const control2 = () => setControl(!control);
  const restrict2 = () => setRestrict(!restrict);
  const noFlexy2 = () => setNoFlexy(!noFlexy);
  const limited2 = () => setLimited(!limited);
  const penalty2 = () => setPenalty(!penalty);
  const impact2 = () => setImpact(!impact);
  const state2 = () => setState(!state);
  const admin2 = () => setAdmin(!admin);
  const market2 = () => setMarket(!market);
  const next5292 = () => setNext529(!next529);
  const key2 = () => setKey(!key);
  const income2 = () => setIncome(!income);
  const portable2 = () => setPortable(!portable);
  const keyCon2 = () => setKeyCon(!keyCon);
  const keyLimits2 = () => setKeyLimits(!keyLimits);
  const qualified2 = () => setQualified(!qualified);
  const eligible2 = () => setEligible(!eligible);
  const keyInvestments2 = () => setKeyInvestments(!keyInvestments);
  const keyControl2 = () => setKeyControl(!keyControl);
  const conLim2 = () => setConLim(!conLim);
  const taxBen2 = () => setTaxBen(!taxBen);
  const aveFunds2 = () => setAveFunds(!aveFunds);
  const aveInvestments2 = () => setAveInvestments(!aveInvestments);
  const aveCon2 = () => setAveCon(!aveCon);
  // const ptp2 = () => setPtp(!ptp);
  return (
    <div className="midTerm">
      <h2>Mid-Term Goals</h2>
      <div>
        <button onClick={helpKids2}>Help Kids</button>
        <button onClick={house2}>House</button>
        <button onClick={car2}>Buy a Car</button>
        <button onClick={funds2}>School Funds</button>
      </div>
      {house && <div>To be continued...</div>}
      {car && <div>To be continued...</div>}
      {funds && <div>To be continued...</div>}
      {helpKids && (
        <div>
          <h3>How do they want to help kids?</h3>
          <button onClick={college2}>College</button>
          <button onClick={weddings2}>Weddings</button>
          <button onClick={missions2}>Missions</button>
          <button onClick={longTerm2}>Long Term Savings</button>
        </div>
      )}
      {college && (
        <div className="row">
          <div className="container">
            <button className="info-button" onClick={account2}>
              529 Account
            </button>
            <p className="additionals">
              A 529 plan is a tax-advantaged savings plan designed to encourage
              saving for future education costs. These plans, named after
              Section 529 of the Internal Revenue Code, are sponsored by states,
              state agencies, or educational institutions. There are two main
              types of 529 plans: college savings plans and prepaid tuition
              plans.
            </p>
          </div>
          <div className="container">
            <button className="info-button" onClick={education2}>
              Education Savings Acct
            </button>
            <p className="additionals">
              Education Savings Accounts (ESAs), also known as Coverdell
              Education Savings Accounts (CESAs), are tax-advantaged savings
              accounts designed to help families save for qualified education
              expenses.
            </p>
          </div>
          <button onClick={ave2}>529 vs ESA</button>
          <button onClick={roth2}>Roth IRA</button>
          <button onClick={childIul2}>Child IUL</button>
        </div>
      )}
      {account && (
        <div>
          <button onClick={csp2}>College Savings Plan</button>
          <button onClick={ptp2}>Prepaid Tuition Plan</button>
          {csp && (
            <p className="h">
              These plans allow individuals to save for future education
              expenses, such as tuition, fees, books, and room and board, at any
              eligible educational institution, including colleges,
              universities, and vocational schools. Contributions to college
              savings plans are invested in a variety of investment options,
              such as mutual funds, and the value of the account may fluctuate
              based on the performance of those investments.
            </p>
          )}
          {ptp && (
            <p className="h">
              Prepaid tuition plans allow individuals to prepay all or part of
              the costs of an in-state public college education. These plans may
              also be converted for use at private and out-of-state colleges.
              The advantage of prepaid tuition plans is that they lock in
              today's tuition rates, protecting against future tuition
              increases.
            </p>
          )}
          <div className="halfsies">
            <div className="half">
              <h4>Pros:</h4>
              <ol>
                <li>
                  <button onClick={tax2}>Tax Advantages</button>
                  {tax && (
                    <p>
                      Contributions to 529 plans are made with after-tax
                      dollars, but the earnings grow tax-deferred, meaning you
                      won't owe federal taxes on the investment gains as long as
                      the funds are used for qualified education expenses.
                      Additionally, some states offer tax deductions or credits
                      for contributions to their 529 plans.
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={flexy2}>Flexibility</button>
                  {flexy && (
                    <p>
                      Funds in a 529 plan can be used for qualified education
                      expenses at eligible institutions nationwide, including
                      tuition, fees, books, supplies, and room and board.
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={high2}>High Contribution Limits</button>
                  {high && (
                    <p>
                      While contribution limits vary by state, they are
                      generally quite high, often exceeding $300,000 per
                      beneficiary.
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={control2}>Ownership and Control</button>
                  {control && (
                    <p>
                      The account owner retains control over the 529 plan,
                      including the right to change beneficiaries or withdraw
                      funds for non-education expenses. However, non-qualified
                      withdrawals are subject to income tax and a 10% penalty on
                      the earnings portion.
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={restrict2}>No Income Restrictions</button>
                  {restrict && (
                    <p>
                      Unlike some other education savings vehicles, such as
                      Coverdell Education Savings Accounts (ESAs), there are no
                      income restrictions for contributing to a 529 plan.
                    </p>
                  )}
                </li>
              </ol>
            </div>
            <div className="half">
              <h4>Cons:</h4>
              <ol>
                <li>
                  <button onClick={noFlexy2}>
                    Lack of Flexibility for Non-School Related Help:
                  </button>
                  {noFlexy && (
                    <p>
                      With a 529 you are limited to helping in some capacity
                      towards school, but are not able to use the funds to help
                      with missions, volutneer trips, weddings, emergencies, car
                      / house funds, etc.
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={limited2}>
                    Limited Investment Options:
                  </button>
                  {limited && (
                    <p>
                      While 529 plans typically offer a range of investment
                      options, you are generally limited to the investment
                      options provided by the plan. If you prefer more control
                      over your investments or want to explore alternative
                      investment strategies, a different type of account may be
                      more suitable.
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={penalty2}>
                    Penalties for Non-Qualified Withdrawals:
                  </button>
                  {penalty && (
                    <p>
                      If you withdraw funds from a 529 plan for expenses that
                      are not considered qualified education expenses, you may
                      be subject to income tax on the earnings portion of the
                      withdrawal, as well as a 10% penalty. This penalty can
                      significantly reduce the overall value of your investment
                      if you need to use the funds for other purposes.
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={impact2}>
                    Impact on Financial Aid Eligibility:
                  </button>
                  {impact && (
                    <p>
                      Funds held in a 529 plan are generally considered parental
                      assets for financial aid purposes, which means they may
                      have a smaller impact on financial aid eligibility
                      compared to assets held in the student's name. However,
                      withdrawals from a 529 plan count as income for the
                      beneficiary and may reduce eligibility for need-based
                      financial aid in future years.
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={state2}>State-Specific Tax Benefits:</button>
                  {state && (
                    <p>
                      While many states offer tax benefits for contributions to
                      their 529 plans, these benefits are often limited to
                      residents of the state sponsoring the plan. If you
                      contribute to an out-of-state plan or move to a different
                      state, you may lose out on potential tax advantages.
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={admin2}>
                    Administrative Fees and Expenses:
                  </button>
                  {admin && (
                    <p>
                      Like any investment account, 529 plans may have
                      administrative fees, investment management fees, and other
                      expenses that can reduce the overall return on your
                      investment. It's essential to carefully review the fees
                      associated with any plan you're considering and compare
                      them to the potential tax benefits and investment options.
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={market2}>Market Risk:</button>
                  {market && (
                    <p>
                      Investments in 529 plans are subject to market risk,
                      meaning the value of your account may fluctuate based on
                      the performance of the underlying investments. While
                      college savings plans typically offer a range of
                      investment options with varying levels of risk, there is
                      still the potential for loss, particularly in volatile
                      market conditions.
                    </p>
                  )}
                </li>
              </ol>
            </div>
          </div>
          <button
            onClick={next5292}
            style={{
              marginTop: "50px",
            }}
          >
            If this is what they choose then...
          </button>
          {next529 && <div>To be continued...</div>}
        </div>
      )}
      {education && (
        <div className="h">
          <ol>
            <li>
              <button onClick={key2}>Key Benefits:</button>
              {key && (
                <div>
                  <button onClick={keyCon2}>Contributions:</button>
                  {keyCon && (
                    <p>
                      Contributions to an ESA are made with after-tax dollars,
                      meaning contributions are not tax-deductible. However, the
                      earnings in the account grow tax-free, and withdrawals for
                      qualified education expenses are also tax-free.
                    </p>
                  )}
                  <button onClick={keyLimits2}>Contribution Limits:</button>
                  {keyLimits && (
                    <p>
                      The maximum annual contribution limit for each beneficiary
                      is $2,000 as of my last update. Contributions can be made
                      by anyone, including parents, grandparents, other family
                      members, or friends, as long as their income falls below
                      certain thresholds.
                    </p>
                  )}
                  <button onClick={qualified2}>
                    Qualified Education Expenses:
                  </button>
                  {qualified && (
                    <p>
                      Funds from an ESA can be used to pay for qualified
                      education expenses for the designated beneficiary. These
                      expenses include tuition, fees, books, supplies,
                      equipment, and certain educational services. Unlike 529
                      plans, ESAs can also be used for qualified K-12 expenses,
                      in addition to higher education expenses.
                    </p>
                  )}
                  <button onClick={eligible2}>Eligible Beneficiaries:</button>
                  {eligible && (
                    <p>
                      The designated beneficiary of an ESA must be under the age
                      of 18 when the account is established. However, the funds
                      can be used for qualified education expenses until the
                      beneficiary reaches age 30, allowing for more flexibility
                      in using the funds.
                    </p>
                  )}
                  <button onClick={keyInvestments2}>Investment Options:</button>
                  {keyInvestments && (
                    <p>
                      ESAs typically offer a range of investment options,
                      including stocks, bonds, mutual funds, and other
                      securities. The account owner has more control over the
                      investment decisions and can tailor the investment
                      strategy to their risk tolerance and financial goals.
                    </p>
                  )}
                  <button onClick={keyControl2}>Ownership and Control:</button>
                  {keyControl && (
                    <p>
                      The account is typically owned and controlled by the
                      custodian, who is responsible for managing the account and
                      making investment decisions on behalf of the beneficiary
                      until they reach the age of majority (usually 18 or 21,
                      depending on the state). At that point, control of the
                      account typically transfers to the beneficiary.
                    </p>
                  )}
                </div>
                // <ul>
                //   <li></li>
                //   <li></li>
                //   <li></li>
                //   <li></li>
                // </ul>
              )}
            </li>
            <li>
              <button onClick={income2}>Income Limits:</button>
              {income && (
                <p>
                  There are income limits that may affect eligibility to
                  contribute to an ESA. For example, as of my last update,
                  single filers with modified adjusted gross income (MAGI) above
                  $110,000 and joint filers with MAGI above $220,000 are not
                  eligible to contribute to an ESA.
                </p>
              )}
            </li>
            <li>
              <button onClick={portable2}>Portability:</button>
              {portable && (
                <p>
                  ESAs offer more flexibility than 529 plans in terms of where
                  the funds can be used. Funds from an ESA can be used for
                  qualified education expenses at eligible institutions
                  nationwide, including elementary, secondary, and
                  post-secondary schools.
                </p>
              )}
            </li>
          </ol>
        </div>
      )}
      {ave && (
        <div className="h">
          <ol>
            <li>
              <button onClick={conLim2}>Contributions and Limits:</button>
              {conLim && (
                <div className="halfsies">
                  <p className="half">
                    <span style={{ fontWeight: "bold" }}>529 Plans:</span> These
                    typically have higher contribution limits, often exceeding
                    $300,000 per beneficiary. However, each state sets its own
                    limit.
                  </p>
                  <p className="half">
                    <span style={{ fontWeight: "bold" }}>ESAs:</span>{" "}
                    Contributions are limited to $2,000 per year per
                    beneficiary. Additionally, there are income limits that may
                    restrict eligibility for contributing to an ESA.
                  </p>
                </div>
              )}
            </li>
            <li>
              <button onClick={taxBen2}>Tax Benefits:</button>
              {taxBen && (
                <div className="halfsies">
                  <p className="half">
                    <span style={{ fontWeight: "bold" }}>529 Plans:</span>{" "}
                    Contributions are made with after-tax dollars, but earnings
                    grow tax-deferred, and withdrawals for qualified education
                    expenses are tax-free at the federal level. Some states
                    offer tax deductions or credits for contributions to their
                    529 plans.
                  </p>
                  <p className="half">
                    <span style={{ fontWeight: "bold" }}>ESAs:</span>{" "}
                    Contributions are made with after-tax dollars, and earnings
                    grow tax-free. Withdrawals for qualified education expenses
                    are also tax-free at the federal level. However, unlike 529
                    plans, there are no state tax benefits associated with ESAs.
                  </p>
                </div>
              )}
            </li>
            <li>
              <button onClick={aveFunds2}>Use of Funds:</button>
              {aveFunds && (
                <div className="halfsies">
                  <p className="half">
                    <span style={{ fontWeight: "bold" }}>529 Plans:</span> Funds
                    can be used for qualified education expenses at eligible
                    institutions nationwide, including colleges, universities,
                    vocational schools, and even some K-12 expenses.
                  </p>
                  <p className="half">
                    <span style={{ fontWeight: "bold" }}>ESAs:</span> Funds can
                    be used for qualified education expenses from kindergarten
                    through 12th grade, as well as for higher education
                    expenses. Qualified expenses include tuition, fees, books,
                    supplies, equipment, and certain educational services.
                  </p>
                </div>
              )}
            </li>
            <li>
              <button onClick={aveInvestments2}>Investment Options:</button>
              {aveInvestments && (
                <div className="halfsies">
                  <p className="half">
                    <span style={{ fontWeight: "bold" }}>529 Plans:</span>{" "}
                    Typically offer a range of investment options, such as
                    mutual funds, ETFs, and age-based portfolios. The investment
                    options vary by plan and may be managed by different
                    financial institutions.
                  </p>
                  <p className="half">
                    <span style={{ fontWeight: "bold" }}>ESAs:</span> Generally
                    offer more flexibility in investment choices, allowing for a
                    broader range of investment options, including stocks,
                    bonds, mutual funds, and other securities. This flexibility
                    allows investors to tailor their investment strategy to
                    their risk tolerance and financial goals.
                  </p>
                </div>
              )}
            </li>
            <li>
              <button onClick={aveCon2}>Options & Control:</button>
              {aveCon && (
                <div className="halfsies">
                  <p className="half">
                    <span style={{ fontWeight: "bold" }}>529 Plans:</span> The
                    account owner retains control over the account, including
                    the right to change beneficiaries or withdraw funds for
                    non-education expenses. However, non-qualified withdrawals
                    are subject to income tax and a 10% penalty on the earnings
                    portion.
                  </p>
                  <p className="half">
                    <span style={{ fontWeight: "bold" }}>ESAs:</span> The
                    account is typically owned and controlled by the custodian,
                    who is responsible for managing the account and making
                    investment decisions on behalf of the beneficiary until they
                    reach the age of majority.
                  </p>
                </div>
              )}
            </li>
          </ol>
        </div>
      )}
      {weddings && (
        <div>
          <button onClick={childIul2}>Child IUL</button>
          <li>Savings Acct</li>
        </div>
      )}
      {missions && (
        <div>
          <button onClick={childIul2}>Child IUL</button>
          <li>Savings Acct</li>
        </div>
      )}
      {longTerm && (
        <div>
          <button onClick={roth2}>Roth IRA</button>
          <button onClick={childIul2}>Child IUL</button>
        </div>
      )}
      {roth && <div></div>}
      {childIul && <div></div>}
    </div>
  );
};

export default MidTermGoals;
