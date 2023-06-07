import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPageforums.css";
const LandingPageforums = () => {
  const navigate = useNavigate();

  const onProfileIconImageClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTaskIconClick = useCallback(() => {
    navigate("/my-goals");
  }, [navigate]);

  const onSocialIconClick = useCallback(() => {
    navigate("/social-3");
  }, [navigate]);

  const onProfileIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onHomeBuddiesCardsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onForumCardsContainerClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <article className="landing-pageforums">
      <img className="bg-icon2" alt="" src="/bg@2x.png" />
      <div className="header">
        <div className="homeheader">
          <span className="homeheader-txt">
            <span>{`Welcome to `}</span>
            <span className="studybuddy">StudyBuddy</span>
          </span>
        </div>
        <div className="hometagline">
          Embrace the Power of Collaborative Learning
        </div>
        <img className="header-child" alt="" src="/line-2.svg" />
      </div>
      <img
        className="profileicon4"
        alt=""
        src="/profileicon2@2x.png"
        onClick={onProfileIconImageClick}
      />
      <div className="navbar3">
        <div className="navbar-child1" />
        <div className="navbaricons3">
          <img className="selected-icon3" alt="" src="/selected3.svg" />
          <img
            className="taskicon3"
            alt=""
            src="/taskicon3.svg"
            onClick={onTaskIconClick}
          />
          <img
            className="socialicon3"
            alt=""
            src="/socialicon3.svg"
            onClick={onSocialIconClick}
          />
          <img
            className="profileicon5"
            alt=""
            src="/profileicon4.svg"
            onClick={onProfileIconClick}
          />
        </div>
      </div>
      <div className="forumsection">
        <div className="top-forums">{`TOP FORUMS >>`}</div>
        <div
          className="homebuddiescards"
          onClick={onHomeBuddiesCardsContainerClick}
        >
          <div className="homeforumcard">
            <div className="homeforumcard-child" />
            <img
              className="homecardbg1-icon"
              alt=""
              src="/homecardbg1@2x.png"
            />
            <div className="forumsubject-parent">
              <div className="top-forums">V.L.S.I.</div>
              <div className="forumtitle">CMOS inverter</div>
              <div className="forumauthor">
                <img
                  className="forumauthonicon"
                  alt=""
                  src="/forumauthonicon@2x.png"
                />
                <div className="forumauthorname">by aesto_naz</div>
              </div>
            </div>
          </div>
          <div className="homeforumcard">
            <div className="homeforumcard-child" />
            <img
              className="homecardbg1-icon"
              alt=""
              src="/homecardbg1@2x.png"
            />
            <div className="forumsubject-parent">
              <div className="top-forums">D.B.M.S</div>
              <div className="forumtitle">SQL queries</div>
              <div className="forumauthor">
                <img
                  className="forumauthonicon"
                  alt=""
                  src="/forumauthonicon1@2x.png"
                />
                <div className="forumauthorname">by abalonestarling</div>
              </div>
            </div>
          </div>
          <div className="homeforumcard">
            <div className="homeforumcard-child" />
            <img
              className="homecardbg1-icon"
              alt=""
              src="/homecardbg1@2x.png"
            />
            <div className="forumsubject-parent">
              <div className="top-forums">O.S</div>
              <div className="forumtitle">Linux Basics</div>
              <div className="forumauthor">
                <div className="divavatar">
                  <img
                    className="link-fa-2jpg"
                    alt=""
                    src="/link--fa2jpg@2x.png"
                  />
                </div>
                <div className="forumauthorname">by devastatedable</div>
              </div>
            </div>
          </div>
          <div className="homeforumcard">
            <div className="homeforumcard-child" />
            <img
              className="homecardbg1-icon"
              alt=""
              src="/homecardbg1@2x.png"
            />
            <div className="forumsubject-parent">
              <div className="top-forums">Info Sec</div>
              <div className="forumtitle">Primary threats</div>
              <div className="forumauthor">
                <img
                  className="forumauthonicon"
                  alt=""
                  src="/forumauthonicon@2x.png"
                />
                <div className="forumauthorname">by aesto_naz</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buddiessection">
        <div className="top-forums">{`TOP BUDDIES >>`}</div>
        <div className="homebuddiescards" onClick={onForumCardsContainerClick}>
          <div className="homeforumcard">
            <div className="homeforumcard-child" />
            <img
              className="homecardbg1-icon"
              alt=""
              src="/homecardbg1@2x.png"
            />
            <div className="forumsubject-parent">
              <div className="top-forums">V.L.S.I.</div>
              <div className="forumtitle">CMOS inverter</div>
              <div className="forumauthor">
                <img
                  className="forumauthonicon"
                  alt=""
                  src="/forumauthonicon@2x.png"
                />
                <div className="forumauthorname">by aesto_naz</div>
              </div>
            </div>
          </div>
          <div className="homeforumcard">
            <div className="homeforumcard-child" />
            <img
              className="homecardbg1-icon"
              alt=""
              src="/homecardbg1@2x.png"
            />
            <div className="forumsubject-parent">
              <div className="top-forums">D.B.M.S</div>
              <div className="forumtitle">SQL queries</div>
              <div className="forumauthor">
                <img
                  className="forumauthonicon"
                  alt=""
                  src="/forumauthonicon1@2x.png"
                />
                <div className="forumauthorname">by abalonestarling</div>
              </div>
            </div>
          </div>
          <div className="homeforumcard">
            <div className="homeforumcard-child" />
            <img
              className="homecardbg1-icon"
              alt=""
              src="/homecardbg1@2x.png"
            />
            <div className="forumsubject-parent">
              <div className="top-forums">O.S</div>
              <div className="forumtitle">Linux Basics</div>
              <div className="forumauthor">
                <div className="divavatar">
                  <img
                    className="link-fa-2jpg"
                    alt=""
                    src="/link--fa2jpg@2x.png"
                  />
                </div>
                <div className="forumauthorname">by devastatedable</div>
              </div>
            </div>
          </div>
          <div className="homeforumcard">
            <div className="homeforumcard-child" />
            <img
              className="homecardbg1-icon"
              alt=""
              src="/homecardbg1@2x.png"
            />
            <div className="forumsubject-parent">
              <div className="top-forums">Info Sec</div>
              <div className="forumtitle">Primary threats</div>
              <div className="forumauthor">
                <img
                  className="forumauthonicon"
                  alt=""
                  src="/forumauthonicon@2x.png"
                />
                <div className="forumauthorname">by aesto_naz</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LandingPageforums;
