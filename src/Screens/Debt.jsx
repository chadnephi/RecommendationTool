import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./debt.css";

const Debt = () => {
  const [debt, setDebt] = useState(false);
  const [noDebt, setNoDebt] = useState(false);
  const [secure, setSecure] = useState(false);
  const [noUnsecure, setNoUnsecure] = useState(false);
  const [unsecure, setUnsecure] = useState(false);
  const [unsecure1, setUnsecure1] = useState(false);
  const [snowball, setSnowball] = useState(false);
  const [discretionary, setDiscretionary] = useState(false);
  const [done, setDone] = useState(false);
  const [elser, setElse] = useState(false);
  const [income, setIncome] = useState(false);
  const [debtCon, setDebtCon] = useState(false);
  const [good, setGood] = useState(false);
  const [noGood, setNoGood] = useState(false);
  const [heloc, setHeloc] = useState(false);
  const [noHeloc, setNoHeloc] = useState(false);
  const [conLoan, setConLoan] = useState(false);
  const [noConLoan, setNoConLoan] = useState(false);
  const [live, setLive] = useState(false);
  const [maybe, setMaybe] = useState(false);
  const [nope, setNope] = useState(false);
  const [inDebt, setInDebt] = useState(false);
  const [notInDebt, setNotInDebt] = useState(false);
  const [should, setShould] = useState(false);
  const [shouldNot, setShouldNot] = useState(false);

  const debt2 = () => setDebt(!debt);
  const noDebt2 = () => setNoDebt(!noDebt);
  const secure2 = () => setSecure(!secure);
  const unsecure2 = () => setUnsecure(!unsecure);
  const noUnsecure3 = () => setNoUnsecure(!noUnsecure);
  const unsecure3 = () => setUnsecure1(!unsecure1);
  const snowball2 = () => setSnowball(!snowball);
  const discretionary2 = () => setDiscretionary(!discretionary);
  const done2 = () => setDone(!done);
  const else2 = () => setElse(!elser);
  const income2 = () => setIncome(!income);
  const debtCon2 = () => setDebtCon(!debtCon);
  const good2 = () => setGood(!good);
  const noGood2 = () => setNoGood(!noGood);
  const heloc2 = () => setHeloc(!heloc);
  const noHeloc2 = () => setNoHeloc(!noHeloc);
  const conLoan2 = () => setConLoan(!conLoan);
  const noConLoan2 = () => setNoConLoan(!noConLoan);
  const live2 = () => setLive(!live);
  const maybe2 = () => setMaybe(!maybe);
  const nope2 = () => setNope(!nope);
  const inDebt2 = () => setInDebt(!inDebt);
  const notInDebt2 = () => setNotInDebt(!notInDebt);
  const should2 = () => setShould(!should);
  const shouldNot2 = () => setShouldNot(!shouldNot);

  return (
    <div className="debt">
      <div className="half">
        <h3>Do they have any debts?</h3>
        <button onClick={debt2}>Yes</button>
        <button onClick={noDebt2}>No</button>
        {debt && (
          <div>
            <h3>What types?</h3>
            <div className="secureButtons">
              <div className="container">
                <button className="info-button" onClick={secure2}>
                  Secure
                </button>
                <p className="additional-info">
                  Backed by assests / Collateral
                </p>
              </div>
              <div className="container">
                <button className="info-button" onClick={unsecure2}>
                  Unsecure
                </button>
                <p className="additional-info">
                  Not backed by a hard asset or a type of collateral
                </p>
              </div>
            </div>
          </div>
        )}
        {noDebt && (
          <h4>
            Great! Skip this section of recommendations (why are you here?)
          </h4>
        )}
        {secure && (
          <div>
            <ul>
              <li>Home / Real estate</li>
              <li>Car / Vehicles </li>
              <li>Home Equity Lines of Credit (HELOC)</li>
              <li>401K Loan / other investment loans</li>
            </ul>
          </div>
        )}
        {unsecure && (
          <div>
            <ul>
              <li>Credit cards </li>
              <li>Personal loans</li>
              <li>Student Loans </li>
              <li>Medical Loans</li>
            </ul>
          </div>
        )}
      </div>
      {/* ************************************************************** */}
      <div className="half">
        <div className="inline">
          <div className="container">
            <button className="info-button" onClick={snowball2}>
              Snowball
            </button>
            <p className="additional">
              A debt snowball is a method of debt repayment that involves paying
              off debts in order of smallest to largest balance, regardless of
              the interest rates on the debts. The idea is to start by paying
              off the smallest debt first, then using the freed-up money to
              tackle the next smallest debt, and so on. As each debt is paid
              off, the individual gains a sense of accomplishment and
              motivation, creating momentum like a snowball rolling down a hill.
            </p>
          </div>
          <div className="container">
            <button className="info-button" onClick={live2}>
              Debtmerica
            </button>
            <p className="additional">
              Debtmerica is an option to help settle your debts, by having them
              come in and mediate on your behalf.
            </p>
          </div>
          <div className="container">
            <button className="info-button" onClick={debtCon2}>
              Debt Consolidation
            </button>
            <p className="additional">
              Debt consolidation is a financial strategy that involves combining
              multiple debts into a single, larger loan or credit line. The
              purpose of debt consolidation is to simplify the repayment process
              and potentially reduce the overall interest rate on the debts.
            </p>
          </div>
        </div>
        {snowball && (
          <div>
            <h3>
              Can we take some of the discretionary income and put it towards
              the lowest balance (to pay it off first and begin the snowball)?{" "}
            </h3>
            <button onClick={discretionary2}>Yes</button>
            <button onClick={income2}>No</button>
          </div>
        )}
        {income && (
          <div>
            <h4>
              Ok, can we increase income OR do we need to look at other options?
            </h4>
          </div>
        )}
        {discretionary && (
          <div>
            <p>Great!</p>
            <h3>How much discretionary and what impact does it make? </h3>
            <li>
              Get clear on the numbers of interest saved AND how much time will
              be saved
            </li>
            <h3>Is that the option they want to take? </h3>
            <button onClick={done2}>Yes</button>
            <button onClick={else2}>No</button>
          </div>
        )}
        {done && (
          <div>
            <h4>Great! Your work is done here</h4>
          </div>
        )}
        {elser && (
          <div>
            <h4>Ok, What else?</h4>
          </div>
        )}
        {live && (
          <div>
            <h3>Do they live in a state where it is possible? </h3>
            <div>
              <Link
                to="https://drive.google.com/drive/folders/1IY_O9VnVybbumKMiAIIUKDnF6CpmEpG8"
                style={{ color: "black", textDecorationLine: "underline" }}
                target="_blank"
              >
                Check Step 5 - Debtmerica
              </Link>
            </div>
            <button onClick={unsecure3}>Yes</button>
            <button onClick={noUnsecure3}>No</button>
          </div>
        )}
        {unsecure1 && (
          <div>
            <p>Great!</p>
            <h3>
              Do they have at least $10K in UNSECURED debt (minus any student
              loans)?
            </h3>
            <button onClick={inDebt2}>Yes</button>
            <button onClick={notInDebt2}>No</button>
          </div>
        )}
        {notInDebt && <h3>Not an option</h3>}
        {noUnsecure && (
          <div>
            <h3>
              Do they have close family in another approved state that they can
              put their name on their utility bill?
            </h3>
            <button onClick={maybe2}>Yes</button>
            <button onClick={nope2}>No</button>
          </div>
        )}
        {maybe && <h3>Still an option</h3>}
        {nope && <h3>Not an option</h3>}
        {inDebt && (
          <div>
            <p>Great!</p>
            <div className="halfsies">
              <div className="box">
                <h4>Pros:</h4>
                <ol>
                  <li>
                    They are able to typically mediate about half of it away
                  </li>
                  <li>
                    Frees up discretionary income (more to save or get out of
                    the red)
                  </li>
                  <li>Less debt to pay = less interest </li>
                  <li>Faster (24 - 48 months is the guarantee)</li>
                </ol>
              </div>
              <div className="box">
                <h4>Cons:</h4>
                <ol>
                  <li>Hurts credit score for the first year</li>
                  <li>Still have to qualify for the program </li>
                </ol>
              </div>
            </div>
            <h3 style={{ margin: ".5em" }}>Do YOU think they should do it? </h3>
            <p style={{ fontSize: "small", marginTop: "0" }}>
              (If you need a refresher on it, watch video under Step 5 -
              Debtmerica)
            </p>
            <button onClick={should2}>Yes</button>
            <button onClick={shouldNot2}>No</button>
          </div>
        )}
        {should && (
          <div>
            <ul className="yess">
              <li>Help THEM see that </li>
              <li>Connect to goals/dreams/plans</li>
              <li>Walk them through the process</li>
            </ul>
            <h3 style={{ border: "3px dotted black", padding: "10px 0px" }}>
              They say YES
            </h3>
            <Link
              to="https://wfg.debtmerica.com/login"
              target="_blank"
              style={{ color: "black", textDecorationLine: "underline" }}
            >
              Go to Debtmerica
            </Link>
            <ul className="yess">
              <ol>
                <li>Create an account (if you haven't already)</li>
                <li>Create a referral and fill out SIMPLE form</li>
              </ol>
              <li>
                Make sure they've heard from Debtmerica within 2-3 days (they
                should have, Debtmerica is really on top of it)
              </li>
              <li>
                Once they have applied and qualified for the program (Debtmerica
                will do ALL of that) find out how much MONTHLY they will now pay
                in debts
              </li>
              <ol>
                <li>
                  Helps us know how much they can now SAVE / INVEST / etc.
                </li>
                <li>Apply that info to rest of the plan</li>
              </ol>
            </ul>
            <h4>You are DONE on your end!</h4>
            <h4 style={{ border: "3px dotted black", padding: "10px 0px" }}>
              Congratulations on a Debtmerica plan being submitted! Debtmerica
              will mail you a check with your pay (typically takes a couple of
              weeks)
            </h4>
          </div>
        )}
        {shouldNot && (
          <div>
            <h3>Why not?</h3>
            <ul className="yess">
              <li>They are super concerned about their credit </li>
              <li>They can get out of debt quickly without it </li>
              <li>They had a bad experience with a debt program </li>
              <li>
                They want to make a big purchase (that they CAN afford) needing
                credit in the next year and half
              </li>
            </ul>
          </div>
        )}
        {debtCon && (
          <div>
            <div className="box">
              <h3>
                Do they have lower interest credit cards that they can use to
                pay off higher debts?
              </h3>
              <button onClick={good2}>Yes</button>
              <button onClick={noGood2}>No</button>
              {good && <h4>Great, might be a good choice</h4>}
              {noGood && <h4>Not a good choice</h4>}
            </div>
            <div className="box">
              <h3>
                Do they have a HELOC that they could use to consolidate debts
                that has a lower interest rate?
              </h3>
              <button onClick={heloc2}>Yes</button>
              <button onClick={noHeloc2}>No</button>
              {heloc && <h4>Great!</h4>}
              {noHeloc && (
                <h4>
                  If they really want to use a HELOC, have them check interest
                  rates and options at their bank!
                </h4>
              )}
            </div>
            <div className="box">
              <h3>Do they want to get a debt consolidation loan?</h3>
              <button onClick={conLoan2}>Yes</button>
              <button onClick={noConLoan2}>No</button>
              {conLoan && (
                <div>
                  <h4>
                    Great, have them look at least 2-3 options BEFORE picking
                    one
                  </h4>
                  <li>
                    Make sure they tell you the amount consolidated and new
                    interest rate
                  </li>
                </div>
              )}
              {noConLoan && <h4>Sorry</h4>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Debt;
