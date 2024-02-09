import React from "react";
import { useState } from "react";
import "./insurances.css";

const Insurances = () => {
  const [health, setHealth] = useState(false);
  const [yesHealth, setYesHealth] = useState(false);
  const [noHealth, setNoHealth] = useState(false);
  const [long, setLong] = useState(false);
  const [yesLong, setYesLong] = useState(false);
  const [noLong, setNoLong] = useState(false);
  const [life, setLife] = useState(false);
  const [yesLife, setYesLife] = useState(false);
  const [noLife, setNoLife] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [work, setWork] = useState(false);
  const [term, setTerm] = useState(false);
  const [perm, setPerm] = useState(false);

  const health2 = () => setHealth(!health);
  const yesHealth2 = () => setYesHealth(!yesHealth);
  const noHealth2 = () => setNoHealth(!noHealth);
  const long2 = () => setLong(!long);
  const yesLong2 = () => setYesLong(!yesLong);
  const noLong2 = () => setNoLong(!noLong);
  const life2 = () => setLife(!life);
  const yesLife2 = () => setYesLife(!yesLife);
  const noLife2 = () => setNoLife(!noLife);
  const personal2 = () => setPersonal(!personal);
  const work2 = () => setWork(!work);
  const term2 = () => setTerm(!term);
  const perm2 = () => setPerm(!perm);

  return (
    <div className="insurance">
      <h2>Insurances - Health, Life, LTC</h2>
      <div className="thirds">
        <div className="thirdsies">
          <button onClick={health2}>Health Insurance:</button>
          {health && (
            <div>
              <button onClick={yesHealth2}>Yes</button>
              <button onClick={noHealth2}>No</button>
            </div>
          )}
          {yesHealth && (
            <div>
              <h3>Great, how?</h3>
              <p>Work</p>
              <p>Personal</p>
              <h4>
                <li>How much monthly?</li>
              </h4>
            </div>
          )}
          {noHealth && (
            <div>
              <h3>Why not?</h3>
              <h4>Options:</h4>
              <ol>
                <li>They are "self insured". </li>
                <li>Can't afford it </li>
              </ol>
            </div>
          )}
        </div>
        <div className="thirdsies">
          <button onClick={long2}>Long Term Care:</button>
          {long && (
            <div>
              <button onClick={yesLong2}>Yes</button>
              <button onClick={noLong2}>No</button>
            </div>
          )}
          {yesLong && (
            <div>
              <p>Great!</p>
              <h3>How much coverage?</h3>
              <h3>What's the cost?</h3>
              <h3>Who's it with?</h3>
            </div>
          )}
          {noLong && (
            <div>
              <h3>Why not?</h3>
              <h4>Options:</h4>
              <ol>
                <li>
                  They are under age 55, not a needed discustion right now
                </li>
                <li>Bad health, hard to qualify</li>
                <li>Haven't been taught about LTC and the need for it.</li>
              </ol>
            </div>
          )}
        </div>
        <div className="thirdsies">
          <button onClick={life2}>Life Insurance:</button>
          {life && (
            <div>
              <button onClick={yesLife2}>Yes</button>
              <button onClick={noLife2}>No</button>
            </div>
          )}
          {yesLife && (
            <div>
              <h3>Why did they get it?</h3>
              <h3>Who is it with?</h3>
              <button onClick={personal2}>Personal</button>
              <button onClick={work2}>Work</button>
            </div>
          )}
          {personal && (
            <div>
              <h3>Who is the provider?</h3>
              <h3>How did you decide which type?</h3>
              <div>
                <h4>Options:</h4>
                <ol>
                  <li>Bundled with other insurnaces</li>
                  <li>My friend helped me get it</li>
                </ol>
              </div>
              <button onClick={term2}>Term</button>
              <button onClick={perm2}>Perm</button>
            </div>
          )}
          {term && (
            <h4>
              <ul>
                <li>Whats the face amount?</li>
                <li>How much is the premium?</li>
                <li>What year did it start?</li>
                <li>How many years?</li>
              </ul>
            </h4>
          )}
          {perm && (
            <h4>
              <ul>
                <li>What kind is it?</li>
                <li>Whats the face amount?</li>
                <li>How much is the premium?</li>
                <li>What year did it start?</li>
                <li>What is the cash value?</li>
                <li>Do they have an illustration?</li>
              </ul>
            </h4>
          )}
          {work && <h3>Amount of coverage?</h3>}
          {noLife && (
            <div>
              <h3>Why not?</h3>
              <p>Options:</p>
              <ol>
                <li>Don't see a need for it</li>
                <li>They haven't thought about it</li>
                <li>Insurance is "a scam"</li>
                <li>Not healthy enough for it</li>
                <li>Can't afford it</li>
                <li>Don't understand how it works</li>
                <li>Don't know long term benefits</li>
                <li>They are self insured</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Insurances;
