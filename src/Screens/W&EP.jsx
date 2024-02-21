import React from "react";
import { useState } from "react";
import "./w&ep.css";
import { Link } from "react-router-dom";

const Wealth = () => {
  const [wealth, setWealth] = useState(false);
  const [noWealth, setNoWealth] = useState(false);
  const [both, setBoth] = useState(false);
  const [will, setWill] = useState(false);
  const [free, setFree] = useState(false);
  const [trust, setTrust] = useState(false);
  const [myKids, setMyKids] = useState(false);
  const [noThink, setNoThink] = useState(false);
  const [priority, setPriority] = useState(false);

  const wealth2 = () => setWealth(!wealth);
  const noWealth2 = () => setNoWealth(!noWealth);
  const both2 = () => setBoth(!both);
  const will2 = () => setWill(!will);
  const free2 = () => setFree(!free);
  const trust2 = () => setTrust(!trust);
  const myKids2 = () => setMyKids(!myKids);
  const noThink2 = () => setNoThink(!noThink);
  const priority2 = () => setPriority(!priority);

  return (
    <div className="wep">
      <h3>Do they want to pass on wealth?</h3>
      <button onClick={wealth2}>Yes</button>
      <button onClick={noWealth2}>No</button>
      {wealth && (
        <div>
          <p>Great!</p>
          <h3>Do they have a will or a trust?</h3>
          <button onClick={both2}>No to both</button>
          <button onClick={will2}>No will</button>
          <button onClick={trust2}>No trust</button>
        </div>
      )}
      {both && (
        <div>
          <p>Teach them the differences:</p>
          <Link
            to="https://www.nerdwallet.com/article/investing/estate-planning/will-vs-trust#:~:text=Wills%20and%20trusts%20are%20legal,while%20you%27re%20still%20alive."
            target="_blank"
            style={{ color: "black", textDecorationLine: "underline" }}
          >
            Wills vs. Trust
          </Link>
          <p>
            The only thing with this article is most trusts are actually around
            $2K to $8K
          </p>
        </div>
      )}
      {will && (
        <div>
          <p>Teach them why they need a will</p>
          <Link
            to="https://www.freewill.com/learn/10-reasons-to-have-a-will"
            target="_blank"
            style={{ color: "black", textDecorationLine: "underline" }}
          >
            The 10 most important reasons to have a will
          </Link>
          <h4>Options to get one:</h4>
          <button>
            <Link
              to="https://www.freewill.com/partner/wfg"
              target="_blank"
              style={{ textDecorationLine: "underline" }}
            >
              Free Nationwide Will
            </Link>
          </button>
          <button onClick={free2}>Use a will via Everest</button>
          {free && (
            <div className="free2">
              <ul className="free">
                <li>
                  If they have a Transamerican FFIUL over $250K then they get
                  this for free.
                </li>
                <li>
                  If they do not, then they could get some final expense
                  insurance and the will would be part of it.
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
      {trust && (
        <div>
          <p>
            If they don't have a trust, I would teach them more about trusts:
          </p>
          <Link
            to="https://www.nerdwallet.com/article/investing/estate-planning/family-trust"
            target="_blank"
            style={{ color: "black", textDecorationLine: "underline" }}
          >
            What is a family trust?
          </Link>
          <h4>Options to get one:</h4>
          <p>
            <Link
              to="https://drive.google.com/drive/folders/1s0e5vMpHebUKzRHc1vXr0A-xvtCKb432"
              target="_blank"
              style={{ color: "black", textDecorationLine: "underline" }}
            >
              LSPN
            </Link>{" "}
            is probably the best option. Once you've explained a bit about LSPN,
            I would hand it off to them to do the work of teaching them about
            trusts, costs, etc.
          </p>
          <Link
            to="https://go.lspnpro.com/client-referral"
            target="_blank"
            style={{ color: "black", textDecorationLine: "underline" }}
          >
            Client Referral
          </Link>
        </div>
      )}
      {noWealth && (
        <div>
          <h3>Why not?</h3>
          <p>Options:</p>
          <div className="noWealth">
            <div className="thirdss">
              <button onClick={myKids2}>My kids / family will be fine </button>
              {myKids && (
                <li>
                  If they don't want to pass anything on to kids/family, is
                  there an organization that they do want to pass the leftovers
                  on to?
                </li>
              )}
            </div>
            <div className="thirdss" id="think">
              <button onClick={noThink2}>Don't think that they can </button>
              {noThink && (
                <li>
                  See if there are some ways that you could help them build
                  some:<li>Life Insurance</li>
                  <li>Will/Trust</li>
                  <li>Investments/college funds for kids/grandkids</li>
                </li>
              )}
            </div>
            <div className="thirdss">
              <button onClick={priority2}>Not a priority</button>
              {priority && (
                <li>
                  If it's not a priority for them, I wouldn't stress too much
                  about it. There are probably many other financial things for
                  you to worry about helping them with.
                </li>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wealth;
