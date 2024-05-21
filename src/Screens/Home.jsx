import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>From the Start</h2>
      <p>
        Congratulations on gathering an FNA! You are about to help a family
        reach their why's (their goals & dreams) by helping them with a clear
        financial plan.
      </p>
      <div className="term">
        <div>
          <h3>Step 1:</h3>
          <p>
            Make sure that you fill out the{" "}
            <span>
              <Link
                to="https://www.mywfg.com/fnahome"
                target="_blank"
                style={{ color: "black", textDecorationLine: "underline" }}
              >
                WFG FNA
              </Link>
            </span>{" "}
            program. That should supply you with the basic outline for WHERE
            they are at.
          </p>
        </div>
        <div>
          <h3>Step 2:</h3>
          <p>
            Once the FNA has been created using the info gathered, next pull up
            this tool as well create a copy of this <span>
              <Link
                to="https://docs.google.com/spreadsheets/d/1-7oDuwTt-FCsQw8URPs9UfO3hxHoqz7B/edit#gid=18905319"
                target="_blank"
                style={{ color: "black", textDecorationLine: "underline" }}
              >
                blank template
              </Link>
            </span>. You'll want this
            blank template to look like a million bucks (meaning not sloppy, no
            errors, cleaned up, & specific to them).
          </p>
        </div>
        <div>
          <h3>Step 3:</h3>
          <p>
            With the completed FNA and the blank template start with cash flow.
            What will you recommend they do? Increase income? Prioritize cash
            flow better? Decrease spending in an area? Whatever you decide, make
            a note, so you know what to talk about on the cash flow FNA page.
            Remember to tie this teaching back to their goals & dreams.
          </p>
        </div>
        <div>
          <h3>Step 4:</h3>
          <p>
            Next with the debts, do they have debts that they need to get rid
            of? What strategy do they need? Snowball? Debtmerica? Make note on
            how you will teach this.
          </p>
        </div>
        <div>
          <h3>Step 5:</h3>
          <p>
            What is the game plan with the insurances? Do they need LTC? Life?
            Other? What will you recommend? Write it down and HOW you plan on
            making the insurance piece make sense, while still connecting it to
            the emotions behind having or NOT having insurance.
          </p>
        </div>
        <div>
          <h3>Step 6:</h3>
          <p>Do they need to put money into EF?</p>
        </div>
        <div>
          <h3>Step 7:</h3>
          <p>
            After those pieces, make sure you fill out their FIN on the blank
            template.
          </p>
        </div>
        <div>
          <h3>Step 8:</h3>
          <p>
            What is the investment game plan? How will you connect what they
            want emotionally (growth, security, peace of mind, etc.) to YOUR
            solution / recommendation? If you aren't 100% certain then get
            certain (talk to a trainer, read more, make a list of reasons) and
            make sure that it absolutely emotionally makes sense (with you
            knowing the logistics behind it to answer questions about it). Make
            sure the numbers are filled out correctly and that you have reviewed
            the illustration AHEAD of time.
          </p>
        </div>
        <div>
          <h3>Step 9:</h3>
          <p>
            Are there mid term goals that you need to talk about? House? Helping
            kids? New car?
          </p>
        </div>
        <div>
          <h3>Step 10:</h3>
          <p>
            Do they need a will or a trust? Which option will you recommend?
          </p>
        </div>
        <div>
          <h3>Step 11:</h3>
          <p>
            Review the now filled out template and double check that it all
            looks right.
          </p>
        </div>
        <div>
          <h3>Step 12:</h3>
          <p>
            Take your notes on the talking points and go change this family's
            life!
          </p>
        </div>
      </div>
      <h2>Finished!</h2>
    </div>
  );
};

export default Home;
