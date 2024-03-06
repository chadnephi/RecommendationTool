import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./investments.css";

const Common = ({ min }) => {
  return (
    <div className="type">
      <IoIosCloseCircle className="close" onClick={min} />
      <div className="types">
        <div className="tables">
          <table>
            <tr className="columns">
              <th>What to do if they have a lump sum?</th>
              <td>
                Often times a great first place to start is an annuity (if the
                sum is greater than $10K).
              </td>
              <td>
                Another idea would be doing the full first year on an IUL or a
                single premium IUL.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>What if they don't qualify for IULs?</th>
              <td>
                If they don't qualify for an IUL and an annuity isn't the right
                choice for them either, next best thing is usually a Roth.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>Can I roll something over?</th>
              <td>Depends on if it's "active" or "inactive".</td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>
                What's the smallest amount I can invest? Smallest premium?
              </th>
              <td>
                Depends on what you're wanting to invest in. For an IUL
                (depending on age & health & size of plan), some you can have
                the monthly minimum be $50.
              </td>
              <td>
                If they are wanting to do an annuity, most of the time you need
                $10K.
              </td>
              <td>
                For pretty much everything else there is no minimum amount.
              </td>
              <td>
                Last note, I would be careful about a "minimum amount" mindset.
                No one becomes financially free doing the minimum.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>Where should most people start for a strong foundation?</th>
              <td>
                I'd start with something that will give them the most
                cornerstones at once, usually an IUL.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>Concerns about fees</th>
              <td>
                Almost all investments have fees. What is important is what are
                you getting BECAUSE of the fees.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>Comparing fees</th>
              <td>
                Again, it's all about what the fees get you. For example, one
                investment might have lower fees, but then you pay more in
                taxes.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>Fees vs Taxes</th>
              <td>
                Most of the time, the taxes that people have to pay (especially
                if taxes do go up), are significantly more than fees on
                investments.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>
                What should we recommend if they WON'T commit to a set amount?
              </th>
              <td>
                If they won't commit to a set amount, then pick something with
                some flexiblity (just so they feel like they have some freedom),
                and then really hammer the numbers that it takes to be able to
                retire and emphazie that you don't become wealthy by not
                commiting to consistenly putting money towards the future.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>What if someone doesn't think they need life insurance?</th>
              <td>
                It's possible they don't. You are the professional, do the
                analyzis and you decide if they do or don't. If they do, how
                will you teach that to them? If they don't because they don't
                "need" a death benefit, can you think of other reasons for them
                to get a life insurance? If so, teach them those reasons. Good
                questions help with all of this, coupled with good stories.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>How do I teach / understand the illustration?</th>
              <td>
                Depends on the investment or insurance. See the video links per
                investment / insurance to know.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <table>
            <tr className="columns">
              <th>Where’s the best place to start for a 18-22 year old?</th>
              <td>
                Build an emergency fund and put money towards a 4 cornerstone
                plan.
              </td>
            </tr>
          </table>
        </div>
        <div className="tables">
          <h3>Investments with minimums based on age (Rough Averages)</h3>
          <table>
            <tr className="columns">
              <th>IUL</th>
              <th>Annuities</th>
            </tr>
            <tr className="columns">
              <td>Ages 18-29: $50</td>
              <td>Can't</td>
            </tr>
            <tr className="columns">
              <td>Ages 30-59: $400</td>
              <td>Between $10K to $15K+</td>
            </tr>
            <tr className="columns">
              <td>Ages 60+: $600</td>
              <td>Between $10K to $15K+</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Common;
