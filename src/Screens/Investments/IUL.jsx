import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./investments.css";
import "../insurances.css";

const IUL = () => {
  const [transamerica, setTransamerica] = useState(false);
  const [pacLife, setPacLife] = useState(false);
  const [nationwide, setNationwide] = useState(false);
  const [crump, setCrump] = useState(false);
  const [next, setNext] = useState(false);

  const transamerica2 = () => setTransamerica(!transamerica);
  const pacLife2 = () => setPacLife(!pacLife);
  const nationwide2 = () => setNationwide(!nationwide);
  const crump2 = () => setCrump(!crump);
  const next2 = () => setNext(!next);
  return (
    <div>
      <button onClick={transamerica2}>Transamerica</button>
      <button onClick={pacLife2}>Pacific Life</button>
      <button onClick={nationwide2}>Nationwide</button>
      <button onClick={crump2}>Ask Crump</button>
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
      {crump && (
        <div>
          <p>Call Crump</p>
        </div>
      )}
      <div>
        <button onClick={next2}>Next Steps:</button>
        {next && (
          <div>
            <h3>Determine the size of the plan</h3>
            <p>I would do this by considering the following:</p>
            <ol style={{ maxWidth: "30vw" }}>
              <li>
                <span style={{ fontWeight: "bold" }}>Insurable need:</span> how
                much life insurance coverage do they need?
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>
                  Discretionary income -{" "}
                </span>
                Do they have enough to meet the target about (annual amount /
                10)?
                <ul>
                  <li>
                    If not, then maybe a smaller IUL with a term (that can be
                    dropped or converted later) to make up the difference.
                  </li>
                </ul>
              </li>
              <li>
                Even if they have enough discretionary, have you left them a
                buffer of a few hundred or so? Just so it doesn't feel too
                paycheck to paycheck for them
              </li>
              <li>
                Does the size of the plan get them pretty close to their FIN?
                <ul>
                  <li>
                    If not, that's ok, you can talk about getting a bigger size
                    plan later. You can even show them numbers (if you think
                    it'll help) of what a 2nd IUL will do to help them hit their
                    FIN.
                  </li>
                </ul>
              </li>
              <li>
                Is there any foreseeable event or life change that will make it
                hard to keep meeting the target amount?
                <ul>
                  <li>
                    If so, what does their current savings look like to be able
                    to still make everything work?
                  </li>
                </ul>
              </li>
              <li>
                Is there a probability that at some point they can make the
                monthly max work (whether that's by backfilling or otherwise)?
                <ul>
                  <li>If not, that plan might be too large for them. </li>
                </ul>
              </li>
            </ol>
            <h4>Run the specific illustrations and compare between IULs</h4>
            <h4>
              For more help, see{" "}
              <span>
                <Link
                to="https://drive.google.com/drive/folders/1A4V6Hh8cHsBaJsEgDewbjZlleXiUVrBw"
                  target="_blank"
                  style={{
                    color: "black",
                    textDecorationLine: "underline",
                  }}
                >
                  Steps to Success
                </Link>
              </span>
              , Step 5 and talk to your trainer
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default IUL;
