import React, { useState } from "react";
import "./investments.css";
import "../insurances.css";
import IUL from "./IUL";
import Cornerstone from "./Cornerstone";
import Annuities from "./Annuities";

const Options = () => {
    const [iul, setIul] = useState(false)
    const [annuities, setAnnuities] = useState(false)
    const [cornerstone, setCornerstone] = useState(false)

    const iul2 = () => setIul(!iul)
    const annuities2 = () => setAnnuities(!annuities)
    const cornerstone2 = () => setCornerstone(!cornerstone)
  return (
    <div className="thirds">
      <div className="thirdsies">
        <button onClick={iul2} className="iul">
          If they need 2 or more of the cornerstones (or are missing tax
          advantages) I would highly suggest starting with an Index Universal
          Life (IUL).
        </button>
        {iul && <IUL/>}
      </div>
      <div className="thirdsies" id="ltc">
        <button onClick={annuities2}>
          If they are missing 2 or more and they don't have great health, but do
          have a lump sum, I would suggest starting with an annuity. 
        </button>
        {annuities && <Annuities/>}
      </div>
      <div className="thirdsies">
        <button onClick={cornerstone2}>If they are just missing 1 of the cornerstones:</button>
        {cornerstone && <Cornerstone/>}
      </div>
    </div>
  );
};

export default Options;
