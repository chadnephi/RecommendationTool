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
  const [savings, setSavings] = useState(false);
  const [education, setEducation] = useState(false);
  const [account, setAccount] = useState(false);
  const [ave, setAve] = useState(false);
  const [csp, setCsp] = useState(false);
  const [ptp, setPtp] = useState(false);

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
  const savings2 = () => setSavings(!savings);
  const education2 = () => setEducation(!education);
  const account2 = () => setAccount(!account);
  const ave2 = () => setAve(!ave);
  const csp2 = () => setCsp(!csp);
  const ptp2 = () => setPtp(!ptp);
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
          <button onClick={ave2}>528 vs ESA</button>
          <button onClick={roth2}>Roth IRA</button>
          <button onClick={childIul2}>Child IUL</button>
        </div>
      )}
      {account && (
        <div>
          <button onClick={csp2}>College Savings Plan</button>
          <button onClick={ptp2}>Prepaid Tuition Plan</button>
          {csp && (
            <p className="half">
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
            <p className="half">
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
                  <button>Tax Advantages</button>
                </li>
                <li>
                  <button>Flexibility</button>
                </li>
                <li>
                  <button>High Contribution Limits</button>
                </li>
                <li>
                  <button>Ownership and Control</button>
                </li>
                <li>
                  <button>No Income Restrictions</button>
                </li>
              </ol>
            </div>
            <div className="half">
              <h4>Cons:</h4>
              <ol>
                <li><button>Lack of Flexibility for Non-School Related Help: 
</button></li>
                <li><button>Limited Investment Options:</button></li>
                <li><button>Penalties for Non-Qualified Withdrawals:</button></li>
                <li><button>Impact on Financial Aid Eligibility:</button></li>
                <li><button>State-Specific Tax Benefits:</button></li>
                <li><button>Administrative Fees and Expenses:</button></li>
                <li><button>Market Risk:</button></li>
              </ol>
            </div>
          </div>
        </div>
      )}
      {ave && <div></div>}
      {roth && <div></div>}
      {childIul && <div></div>}
      {weddings && (
        <ul>
          <li>Child IUL</li>
          <li>Savings Acct</li>
        </ul>
      )}
      {missions && (
        <ul>
          <li>Child IUL</li>
          <li>Savings Acct</li>
        </ul>
      )}
      {longTerm && (
        <ul>
          <li>Roth IRA</li>
          <li>Child IUL</li>
        </ul>
      )}
    </div>
  );
};

export default MidTermGoals;
