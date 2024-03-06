import React, { useState } from "react";
import "./investments.css";

import TheyDont from "./TheyDont";
import AllTheWay from "./AllTheWay";

const YesInvest = () => {
  const [kind, setKind] = useState(false);
  const [long, setLong] = useState(false);
  const [choose, setChoose] = useState(false);
  const [month, setMonth] = useState(false);
  const [allTheWay, setAllTheWay] = useState(false);
  const [theyDont, setTheyDont] = useState(false);
  const [think, setThink] = useState(false);
  const [balance, setBalance] = useState(false);

  const kind2 = () => setKind(!kind);
  const long2 = () => setLong(!long);
  const choose2 = () => setChoose(!choose);
  const month2 = () => setMonth(!month);
  const allTheWay2 = () => setAllTheWay(!allTheWay);
  const theyDont2 = () => setTheyDont(!theyDont);
  const think2 = () => setThink(!think);
  const balance2 = () => setBalance(!balance);

  return (
    <div className="yesInvest">
      <ol>
        <li>
          <button onClick={kind2}>What kind of investment is it?</button>
          {kind && (
            <p>
              If they are not sure, you need to see if they can send you a
              statement
            </p>
          )}
        </li>
        <li>
          <button onClick={long2}>How long have they had it for?</button>
          {long && <p>Write down number of years</p>}
        </li>
        <li>
          <button onClick={choose2}>What made them choose that option?</button>
          {choose && (
            <div>
              <ul>
                <li>Offered via work</li>
                <li>Friend / Parent recommended it</li>
                <li>Advisor recommended it</li>
                <li>Wanted to try to grow wealth</li>
                <li>"Researched" it on Google</li>
              </ul>
              <h4>"What do they think of it" options:</h4>
              <ol>
                <li>
                  They love it. <br />
                  <span style={{ fontWeight: "bold" }}>Why?</span>
                </li>
                <li>They don't know much about it or how it compares</li>
                <li>
                  They don't like it
                  <br />
                  <span style={{ fontWeight: "bold" }}>Why?</span>
                </li>
                <li>"It's there"</li>
              </ol>
            </div>
          )}
        </li>
        <li>
          <button onClick={think2}>What do they think of it?</button>
          {think && <p>...</p>}
        </li>
        <li>
          <button onClick={balance2}>What is the current balance?</button>
          {balance && <p>$...</p>}
        </li>
      </ol>
      <button onClick={month2}>How much do they put towards it a month?</button>
      <button onClick={theyDont2}>They don't</button>
      {month && (
        <div className="month">
          <div className="tip">
            <p>
              Run the numbers to see what the projected balance would be when
              they want to reach their FIN.
            </p>
            <p>
              Run numbers by using one of the calculators and putting in the
              number of years they will have / invest into the plan BEFORE
              retirement, along with the estimated RoR. If you need help running
              numbers, ask your Jr Trainer
            </p>
          </div>
          <div>
            <button onClick={allTheWay2}>
              Does it get them all the way their?
            </button>
          </div>
        </div>
      )}
      {allTheWay && <AllTheWay />}
      {theyDont && <TheyDont />}
    </div>
  );
};

export default YesInvest;
