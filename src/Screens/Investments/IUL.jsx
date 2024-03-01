import React, { useState } from "react";
import "./investments.css";

const IUL = () => {
  const [transamerica, setTransamerica] = useState(false);
  const [pacLife, setPacLife] = useState(false);
  const [nationwide, setNationwide] = useState(false);

  const transamerica2 = () => setTransamerica(!transamerica);
  const pacLife2 = () => setPacLife(!pacLife);
  const nationwide2 = () => setNationwide(!nationwide);
  return (
    <div>
      <button onClick={transamerica2}>Transamerica</button>
      <button onClick={pacLife2}>Pacific Life</button>
      <button onClick={nationwide2}>Nationwide</button>
      <button onClick={nationwide2}>Ask Crump</button>
      {transamerica && (
        <div>
          <table>
            <tr className="columns">
              <th>FFIUL</th>
              <td>Basic IUL</td>
              <td>Great for most families starting off</td>
              <td>Very flexible</td>
              <td>Has the Everest Will</td>
              <td>Can have LTC as well as Living Benefits Riders</td>
            </tr>
          </table>
          <table>
            <tr className="columns">
              <th>FCIUL</th>
              <td>More advanced IUL</td>
              <td>Better potential returns (due to Fidelity Index)</td>
              <td>Not as flexible</td>
              <td>No LTC, only Living Benefits Riders</td>
              <td>Better for higher net worth individuals</td>
            </tr>
          </table>
        </div>
      )}
      {pacLife && (
        <div>
          <table>
            <tr className="columns">
              <td>For high networth individuals</td>
              <td>They have 5 Different IULs</td>
              <td>
                Best things to do would be to call in, describe your case, and
                ask for them to email you an illustration
              </td>
            </tr>
          </table>
        </div>
      )}
      {nationwide && (
        <div>
          <table>
            <tr className="columns">
              <th>Nationwide New Heights® Indexed UL Accumulator 2020</th>
              <td>
                Designed for affluent to emerging affluent individuals ages
                25-60 concerned about protecting their family today and
                enhancing their growth potential for the future.
              </td>
            </tr>
          </table>
          <table>
            <tr className="columns">
              <th>Nationwide® Indexed UL Accumulator II 2020</th>
              <td>
                Designed for affluent or emerging affluent individuals ages
                30-55, Accumulator II offers permanent death benefit protection
                and more features to help increase the potential for greater
                income in the future.
              </td>
            </tr>
          </table>
          <table>
            <tr className="columns">
              <th>Nationwide® Indexed UL Protector II 2020</th>
              <td>
                Designed for individuals ages 45-70, this product offers
                cost-efficient, permanent death benefit coverage with the option
                for a lifetime guarantee and more features for greater cash
                value potential.
              </td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default IUL;
