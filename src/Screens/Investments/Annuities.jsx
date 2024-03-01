import React, { useState } from "react";
import "./investments.css";

const Annuities = () => {
    const [growth, setGrowth] = useState(false)
    const [lifetime, setLifetime] = useState(false)

    const growth2 = () => setGrowth(!growth)
    const lifetime2 = () => setLifetime(!lifetime)
  return (
    <div>
      <button onClick={growth2} style={{maxWidth:"80%"}}>
        Do they need lots of growth and have at least 7 years till Retirement?
      </button>
      <button onClick={lifetime2}>
        Do they need lifetime income (self made pension)?
      </button>
      {growth && <div>Accumulation annuity</div>}
      {lifetime && <div>Lifetime income annuity</div>}
    </div>
  );
};

export default Annuities;
