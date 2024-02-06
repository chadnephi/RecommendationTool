import { useState } from "react";
import "./cashflow.css";

const CashFlow = () => {
  const [showMoney, setShowMoney] = useState(false);
  const [noMoney, setNoMoney] = useState(false);
  const [paycheck, setPaycheck] = useState(false);
  const [payDebt, setPayDebt] = useState(false);
  const [noGoals, setNoGoals] = useState(false);
  const [savings, setSavings] = useState(false);
  const [longTerm, setLongTerm] = useState(false);
  const [noLongTerm, setNoLongTerm] = useState(false);
  const [noSavings, setNoSavings] = useState(false);

  const saving = () => setShowMoney(!showMoney);
  const notSaving = () => setNoMoney(!noMoney);
  const paycheck2 = () => setPaycheck(!paycheck);
  const payDebt2 = () => setPayDebt(!payDebt);
  const noGoals2 = () => setNoGoals(!noGoals);
  const forWhat = () => setSavings(!savings);
  const longTerm2 = () => setLongTerm(!longTerm);
  const noLongTerm2 = () => setNoLongTerm(!noLongTerm);
  const notSavingEnough = () => setNoSavings(!noSavings);

  return (
    <div className="cashflow">
      <div>
        <h3>Are they saving money?</h3>
        <button onClick={saving}>Yes</button>
        <button onClick={notSaving}>No</button>
      </div>
      <div>
        {showMoney && (
          <div>
            <p>Great!</p>
            <h3>Is it at least 10%?</h3>
            <button onClick={forWhat}>Yes</button>
            <button onClick={notSavingEnough}>No</button>
          </div>
        )}
        {noMoney && (
          <div className="no">
            <h3>Why not?</h3>
            <h4>Options:</h4>
            <button onClick={paycheck2}>They are paycheck to paycheck</button>
            <button onClick={payDebt2}>
              They are trying to pay down debt faster
            </button>
            <button onClick={noGoals2}>
              Lack of financial discipline / no clear goals
            </button>
          </div>
        )}
      </div>
      <div>
        
        {payDebt && (
          <div>
            <h3>
              They need to understand the time value of money GROWING not just
              paying down debts.
            </h3>
            <p>Can you help them see that with the numbers?</p>
            <p>What do they think of the projections of their debts?</p>
            <h4>Use the following:</h4>
            <p>Projections of their debts with interest </p>
            <p>
              What difference 1 single year makes in the long run and how does
              it compare to amount of paid interest?
            </p>
          </div>
        )}
        {noGoals && (
          <div>
            <h3>
              They need to follow the Cash Flow Priorites teaching and save
              FIRST
            </h3>
            <p>
              How can YOU get them to understand that? Connect that to their
              goals and dreams.
            </p>
          </div>
        )}
      </div>
      <div>
        {savings && (
          <div>
            <h3>Is the 10% for Long Term?</h3>
            <button onClick={longTerm2}>Yes</button>
            <button onClick={noLongTerm2}>No</button>
          </div>
        )}
        {noSavings && (
          <div>
            <h3>Options:</h3>
            <ol>
            <li>They don't know the 10% rule</li>
            <ul>
              <li>
                Teach it to them! Help them understand the why behind it and
                long term benefits
              </li>
            </ul>
            <li>They don't have the income to follow the rule entirely</li>
            <li>
              <h3>How can they increase their income?</h3>
              <p>More hours? Both spouses work? Ask for pay increase? </p>
              <p style={{ fontWeight: "bold" }}>Work with us?</p>
              <p>Are there leaks in the expenses that they can cut out?</p>
            </li>

            <li>They have other goals, such as:</li>
            <ul>
              <li>Become debt free</li>
              <li>Save up for a house</li>
              <li>Enjoy income now</li>
            </ul>
        </ol>
          </div>
        )}
        {longTerm && (
          <div>
            <p>Great!</p>
            <h3>Where are they putting it?</h3>
            <p>Savings account</p>
            <p>Investment of some sort, like:</p>
            <ul>
              <li>Trad IRA</li>
              <li>Roth IRA</li>
              <li>Stocks / Bonds / Robinhood / Acorn</li>
              <li>CD</li>
              <li>Etc.</li>
            </ul>
            <h4>
              Looking at what they are doing, how does it fit into the 4 Corner
              Stones?{" "}
            </h4>
            <p>Is there a corner stone that they are missing?</p>
            <p>Is there a more effective way to fulfill a cornerstone?</p>
            <p>
              See{" "}
              <a
                href="/EmergencyFund"
                style={{ color: "black", textDecorationLine: "underline" }}
              >
                Investments
              </a>
            </p>
          </div>
        )}
        {paycheck && (
          <div>
            <h3>How can they increase their income?</h3>
            <p>More hours? Both spouses work? Ask for pay increase? </p>
            <p style={{ fontWeight: "bold" }}>Work with us?</p>
            <p>Are there leaks in the expenses that they can cut out?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CashFlow;
