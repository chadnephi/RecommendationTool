import React from "react";
import { useState } from "react";
import "./investments.css";
import Missing from "./Missing";

const NoInvest = () => {
  const [invest, setInvest] = useState(false);
  const [fear, setFear] = useState(false);
  const [lack, setLack] = useState(false);
  const [priorities, setPriorities] = useState(false);
  const [procrastination, setProcrastination] = useState(false);
  const [overwhelmed, setOverwhelmed] = useState(false);
  const [skepticism, setSkepticism] = useState(false);
  const [realEstate, setRealEstate] = useState(false);
  const [missing, setMissing] = useState(false);

  const invest2 = () => setInvest(!invest);
  const fear2 = () => setFear(!fear);
  const lack2 = () => setLack(!lack);
  const priorities2 = () => setPriorities(!priorities);
  const procrastination2 = () => setProcrastination(!procrastination);
  const overwhelmed2 = () => setOverwhelmed(!overwhelmed);
  const skepticism2 = () => setSkepticism(!skepticism);
  const realEstate2 = () => setRealEstate(!realEstate);
  const missing2 = () => setMissing(!missing);

  return (
    <div className="noInvest">
      <h3>Why not?</h3>
      <p>Options:</p>
      <ol>
        <li>
          <button onClick={invest2}>They don't know how to invest</button>
          {invest && (
            <p>
              Teach them! This is the value of 3rd Page. Show them their FIN and
              connect learning how to invest to getting their financial freedom
            </p>
          )}
        </li>
        <li>
          <button onClick={fear2}>
            They worry about making mistakes (fear of loss)
          </button>
          {fear && (
            <p>
              This is where a better understanding of fixed or indexed comes in.
              You also need to help them understand that a RoR lower than
              inflation is still a loss, just a lose in value.
            </p>
          )}
        </li>
        <li>
          <button onClick={lack2}>
            They lack the cash flow and/or discipline to invest
          </button>
          {lack && <p>They need to have better cashflow priorities </p>}
        </li>
        <li>
          <button onClick={priorities2}>
            They have other priorities / short-term thinking
          </button>
          {priorities && (
            <p>They need to understand the value of time on their side. </p>
          )}
        </li>
        <li>
          <button onClick={procrastination2}>
            Procrastination & thinking they can "catch up" later
          </button>
          {procrastination && (
            <p>
              Show them Income by Year tab and how hard it is to just "catch up"
              later
            </p>
          )}
        </li>
        <li>
          <button onClick={overwhelmed2}>Overwhelmed by choices</button>
          {overwhelmed && (
            <p>
              We will help them cut through the noise and find the best fit for
              their specific situation.
            </p>
          )}
        </li>
        <li>
          <button onClick={skepticism2}>
            Skepticism of market, investment companies, safety, etc.
          </button>
          {skepticism && (
            <p>
              If market: Indexed. If investment/insurance companies: teach them
              that they are structured differently than banks (ratio for dollars
              on hand vs dollars promised).
            </p>
          )}
        </li>
        <li>
          <button onClick={realEstate2}>They will invest in real estate</button>
          {realEstate && <p>Real Estate...</p>}
        </li>
      </ol>
      <div>
        <button onClick={missing2}>Where to start</button>
      </div>
      {missing && (
        <div>
          <h2>What major cornerstones are they missing?</h2>
          <Missing />
        </div>
      )}
    </div>
  );
};

export default NoInvest;
