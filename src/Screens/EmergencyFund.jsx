import React from "react";
import { useState } from "react";
import "./ermergencyfund.css";

const EmergencyFund = () => {
  const [emerFun, setEmerFun] = useState(false);
  const [noEmerFun, setNoEmerFun] = useState(false);
  const [ideas, setIdeas] = useState(false);
  const [commit, setCommit] = useState(false);
  const [betterCommit, setBetterCommit] = useState(false);

  const emerFun2 = () => setEmerFun(!emerFun);
  const noEmerFun2 = () => setNoEmerFun(!noEmerFun);
  const ideas2 = () => setIdeas(!ideas);
  const commit2 = () => setCommit(!commit);
  const betterCommit2 = () => setBetterCommit(!betterCommit);

  return (
    <div className="erFun">
      <div className="commit">
        <h3>Do they have an emergency fund?</h3>
        <button onClick={emerFun2}>Yes</button>
        <button onClick={noEmerFun2}>No</button>
        {emerFun && (
          <div>
            <p>
              Are they missing anything with it? If not sure, look at ideas on
              setting up an emergency fund
            </p>
            <button onClick={ideas2}>
              Ideas on setting up an emergency fund:
            </button>
          </div>
        )}
        {noEmerFun && (
          <div>
            <h3>Why not?</h3>
            <p>
              Teach the value of an emergency fund and how much it can protect
              them from debt and stress. As well as protect their long term
              assets{" "}
            </p>
          </div>
        )}
        {ideas && (
          <div>
            <ol>
              <li>
                Seperate account (that way it doesn't accidently get spent on
                another purchase)
              </li>
              <li>Label it Emergency Fund (every dollar a job) </li>
              <li>
                Always have a little going into it (that way habitually it gets
                refilled AFTER it gets used)
              </li>
              <ul>
                <li>Helps build up to the 3 to 6 month mark </li>
                <li>I usually recommend at least $50 a month </li>
              </ul>
              <li>Find the best high yield savings </li>
              <ul>
                <li>I like Betterment, typically it's pretty high </li>
                <li>
                  If they want to use this option, I just give people the link
                  to do it.{" "}
                </li>
              </ul>
            </ol>
          </div>
        )}
      </div>
      <div className="commit">
        <h3>Can you help them commit to doing an emergency fund?</h3>
        <button onClick={commit2}>Yes</button>
        <button onClick={betterCommit2}>No</button>
        {commit && (
          <div>
            <p>Great!</p>
            <p>Check at 6 month / 1 year review to see how that's going</p>
          </div>
        )}
        {betterCommit && <div><h4>You need to understand emergency funds better and make sure YOU have one </h4></div>}
      </div>
    </div>
  );
};

export default EmergencyFund;
