import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./insurances.css";

const Insurances = () => {
  const [health, setHealth] = useState(false);
  const [yesHealth, setYesHealth] = useState(false);
  const [noHealth, setNoHealth] = useState(false);
  const [self, setSelf] = useState(false);
  const [afford, setAfford] = useState(false);
  const [long, setLong] = useState(false);
  const [yesLong, setYesLong] = useState(false);
  const [noLong, setNoLong] = useState(false);
  const [life, setLife] = useState(false);
  const [yesLife, setYesLife] = useState(false);
  const [noLife, setNoLife] = useState(false);
  const [need, setNeed] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [work, setWork] = useState(false);
  const [term, setTerm] = useState(false);
  const [perm, setPerm] = useState(false);
  const [noSee, setNoSee] = useState(false);
  const [stage, setStage] = useState(false);
  const [lack, setLack] = useState(false);
  const [family, setFamily] = useState(false);
  const [debt, setDebt] = useState(false);
  const [thought, setThought] = useState(false);
  const [scam, setScam] = useState(false);
  const [notHealthy, setNotHealthy] = useState(false);
  const [cannot, setCannot] = useState(false);
  const [understand, setUnderstand] = useState(false);
  const [knowLtc, setKnowLtc] = useState(false);
  const [selfInsured, setSelfInsured] = useState(false);

  const health2 = () => setHealth(!health);
  const yesHealth2 = () => setYesHealth(!yesHealth);
  const noHealth2 = () => setNoHealth(!noHealth);
  const self2 = () => setSelf(!self);
  const afford2 = () => setAfford(!afford);
  const long2 = () => setLong(!long);
  const yesLong2 = () => setYesLong(!yesLong);
  const noLong2 = () => setNoLong(!noLong);
  const life2 = () => setLife(!life);
  const yesLife2 = () => setYesLife(!yesLife);
  const noLife2 = () => setNoLife(!noLife);
  const need2 = () => setNeed(!need);
  const personal2 = () => setPersonal(!personal);
  const work2 = () => setWork(!work);
  const term2 = () => setTerm(!term);
  const perm2 = () => setPerm(!perm);
  const noSee2 = () => setNoSee(!noSee);
  const stage2 = () => setStage(!stage);
  const lack2 = () => setLack(!lack);
  const family2 = () => setFamily(!family);
  const debt2 = () => setDebt(!debt);
  const thought2 = () => setThought(!thought);
  const scam2 = () => setScam(!scam);
  const notHealthy2 = () => setNotHealthy(!notHealthy);
  const cannot2 = () => setCannot(!cannot);
  const understand2 = () => setUnderstand(!understand);
  const knowLtc2 = () => setKnowLtc(!knowLtc);
  const selfInsured2 = () => setSelfInsured(!selfInsured);

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
              <p>Work:</p>
              <p>Personal:</p>
              <h4>
                <li>How much monthly?</li>
              </h4>
            </div>
          )}
          {noHealth && (
            <div>
              <h3>Why not?</h3>
              <h4>Options:</h4>
              <button onClick={self2}>They are "self insured"</button>
              <button onClick={afford2}>Can't afford it</button>
            </div>
          )}
          {self && (
            <div>
              <ul>
                <li>
                  Teach them the dangers of being "self insured". Example:
                  "Health insurance provides important financial protection in
                  case you have a serious accident or sickness.
                </li>
                <li>
                  People without health coverage are exposed to these costs.
                  This can sometimes lead people without coverage into deep debt
                  or even into bankruptcy.
                </li>
                <li>
                  It’s easy to underestimate how much medical care can cost:
                </li>
                <li>Fixing a broken leg can cost up to $7,500</li>
                <li>
                  The average cost of a 3-day hospital stay is around $30,000
                </li>
                <li>
                  Comprehensive cancer care can cost hundreds of thousands of
                  dollars
                </li>
                <li>
                  Having health coverage can help protect you from high,
                  unexpected costs like these." -{" "}
                  <Link
                    to="https://www.healthcare.gov/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "underline" }}
                  >
                    HealthCare.gov
                  </Link>
                </li>
                <li>
                  Forbes Article:{" "}
                  <Link
                    to="https://www.forbes.com/advisor/health-insurance/what-happens-if-you-dont-have-health-insurance/"
                    target="_blank"
                    style={{ color: "black", textDecorationLine: "underline" }}
                  >
                    What Happens If You Don’t Have Health Insurance?
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {afford && (
            <li>
              They should look at: Health insurance marketplace (which plans
              might qualify you for subsidies), as well as potentially Medicaid
            </li>
          )}
        </div>
        <div className="thirdsies" id="ltc">
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
                <ul>
                  <li>
                    Use the Longevity Tool, tab LTC to help teach them the
                    importance of LTC.
                  </li>
                </ul>
              </ol>
            </div>
          )}
        </div>
        <div className="thirdsies">
          <button onClick={life2}>Life Insurance:</button>
          {life && (
            <div>
              <div>
                <button onClick={yesLife2}>Yes</button>
                <button onClick={noLife2}>No</button>
              </div>
              <button onClick={need2}>What is their insurable need?</button>
            </div>
          )}
          {need && (
            <p>
              Insurable Need: 10x annual income, total debts, final expenses,
              and leave an immediate emergency fund
            </p>
          )}
          {yesLife && (
            <div>
              <h3>Why did they get it?</h3>
              <h3>How do they have it?</h3>
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
                  <li>Bundled with other insurances</li>
                  <li>My friend helped me get it</li>
                </ol>
              </div>
              <button onClick={term2}>Term</button>
              <button onClick={perm2}>Perm</button>
            </div>
          )}
          {term && (
            <h4>
              <ul style={{flexDirection:"column", textAlign:"start"}}>
                <li>Whats the face amount?</li>
                <li>How much is the premium?</li>
                <li>What year did it start?</li>
                <li>How many years?</li>
              </ul>
            </h4>
          )}
          {perm && (
            <h4>
              <ul style={{flexDirection:"column", textAlign:"start"}}>
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
                <li>
                  <button onClick={noSee2}>Don't see a need for it</button>
                  {noSee && (
                    <div>
                      <h4>Options:</h4>
                      <button onClick={stage2}>Age & Stage of Life</button>
                      <button onClick={lack2}>
                        Lack of Financial Responsibility
                      </button>
                      <button onClick={family2}>"My family will help"</button>
                      <button onClick={debt2}>No debts</button>
                    </div>
                  )}
                  {stage && (
                    <p>
                      Some age groups have a lower need for the death benefit,
                      specifically young and single adults. While keeping this
                      in mind (and addressing it), I would teach them about
                      potential benefits outside of the death benefit such as
                      cash value / retirement planning.
                    </p>
                  )}
                  {lack && (
                    <p>
                      Similar to Age & Stage of Life reason, if they are a young
                      couple and they feel like their spouse will be fine or
                      "survive" without it, then they might feel like life
                      insurance is an extra (note - they do NOT have this excuse
                      if they have kids, it is unacceptable to go without
                      insurance when kids are in the picture, due to their
                      financial responsibility to their kids). Again, I would
                      would focus on benefits of life insurance outside of only
                      the death benefit.
                    </p>
                  )}
                </li>
                {family && (
                  <p>
                    With this reason, I would start with getting very clear on
                    what the family would need if the breadwinner passed away
                    and then clarify that other family would be able to meet all
                    of the needs. Additionally, I would talk about what kind of
                    lifestyle and opportunities would they really be leaving
                    behind if they let their family help with all of it.
                  </p>
                )}
                {debt && (
                  <p>
                    Teach them why it's important to have it, what could happen
                    to their family without it. Any personal stories here is
                    helpful!
                  </p>
                )}
                <li>
                  <button onClick={thought2}>
                    They haven't thought about it
                  </button>
                  {thought && (
                    <p>
                      Teach them why it's important to have it, what could
                      happen to their family without it. Any personal stories
                      here is helpful!
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={scam2}>Insurance is "a scam"</button>
                  {scam && (
                    <p>
                      Insurance companies are legally bound by the contract to
                      pay out. Very few things (such as sucidie, illegal
                      activities, etc), change that.{" "}
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={notHealthy2}>
                    Not healthy enough for it
                  </button>
                  {notHealthy && (
                    <p>
                      Sometimes that is the case. Worst case we can run the
                      Crump form and see if ANY carrier will take them
                    </p>
                  )}
                </li>
                <li>
                  <button onClick={cannot2}>Can't afford it</button>
                  {cannot && (
                    <div>
                      <ul>
                        <li>
                          Can their family afford NOT to have the death benefit
                          if something happened to provider? Are they willing to
                          take that risk?
                        </li>
                        <li>
                          There are extremely affordable term plans and
                          something is better than nothing.
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <button onClick={understand2}>
                    Don't understand how it works
                  </button>
                  {understand && (
                    <div>
                      <p>
                        "Let's break it down. Let's start with the question, if
                        something happened to you and you COULD leave behind a
                        lump sum of $$$ to help your family. What would you like
                        that $$$ to do for them?"
                      </p>
                      <ul>
                        <li>
                          This is teaching them the{" "}
                          <span style={{ fontWeight: "bold" }}>why</span> behind
                          having coverage
                        </li>
                        <li>
                          Then you can teach them that there are two types (Term
                          & Perm)
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <button onClick={knowLtc2}>
                    Don't know long term benefits
                  </button>
                  {knowLtc && (
                    <div>
                      <p>
                        Sometimes people see insurance as just temporary peace
                        of mind, this gives you a chance to talk about long term
                        benefits such as:
                      </p>
                      <ul style={{flexDirection:"column"}}>
                        <li>Leaving behind a family legacy</li>
                        <li>
                          Living benefits (such as LTC, chronic, critical, &
                          terminal illness riders)
                        </li>
                        <li>Cash value for Retirement </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <button onClick={selfInsured2}>They are self insured</button>
                  {selfInsured && (
                    <p>
                      Do they actually have enough for their family to be ok if
                      something happened to them? Do they really want to leave
                      their family in a financially difficult position?
                    </p>
                  )}
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Insurances;
