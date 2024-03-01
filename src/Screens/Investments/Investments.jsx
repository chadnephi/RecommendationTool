import React from "react";
import { useState } from "react";
import "./investments.css";
import TypesOfInvestments from "./TypesOfInvestments";
import Common from "./Common";
import NoInvest from "./NoInvest";
import YesInvest from "./YesInvest";

const Investments = () => {
  const [cornerstones, setCornerstones] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [yesInvest, setYesInvest] = useState(false);
  const [noInvest, setNoInvest] = useState(false);

  const cornerstones2 = () => setCornerstones(!cornerstones);
  const questions2 = () => setQuestions(!questions);
  const yesInvest2 = () => setYesInvest(!yesInvest);
  const noInvest2 = () => setNoInvest(!noInvest);

  return (
    <div className="investment">
      <div>
        <button onClick={cornerstones2}>4 Cornerstone Basics</button>
        <button onClick={questions2}>Common Investing Questions</button>
      </div>
      {cornerstones && (
        <TypesOfInvestments min={() => setCornerstones(false)} />
      )}
      {questions && <Common min={() => setQuestions(false)} />}
      <div>
        <h3>Do they have any investments?</h3>
        <button onClick={yesInvest2}>Yes</button>
        <button onClick={noInvest2}>No</button>
        {yesInvest && <YesInvest />}
        {noInvest && <NoInvest />}
      </div>
    </div>
  );
};

export default Investments;
