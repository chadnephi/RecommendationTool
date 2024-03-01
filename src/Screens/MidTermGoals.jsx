import React, { useState } from "react";
import "./midTermGoals.css";

const MidTermGoals = () => {
  const [helpKids, setHelpKids] = useState(false);
  const [house, setHouse] = useState(false);
  const [car, setCar] = useState(false);
  const [funds, setFunds] = useState(false);
  const [college, setCollege] = useState(false);
  const [weddings, setWeddings] = useState(false);
  const [missions, setMissions] = useState(false);
  const [longTerm, setLongTerm] = useState(false);

  const helpKids2 = () => setHelpKids(!helpKids);
  const house2 = () => setHouse(!house);
  const car2 = () => setCar(!car);
  const funds2 = () => setFunds(!funds);
  const college2 = () => setCollege(!college);
  const weddings2 = () => setWeddings(!weddings);
  const missions2 = () => setMissions(!missions);
  const longTerm2 = () => setLongTerm(!longTerm);
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
        <div>
          <button>529 Account</button>
          <button>Education Savings Acct</button>
          <button>528 vs ESA</button>
          <button>Roth IRA</button>
          <button>Child IUL</button>
        </div>
      )}
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
