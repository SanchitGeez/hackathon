import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
const ProfilePage = () => {
  const navigate = useNavigate();

  const onMessageIconClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const onSelectedIconClick = useCallback(() => {
    navigate("/landing-pageforums");
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

  return (
    <article className="profile-page">
      <img className="bg-icon" alt="" src="/bg@2x.png" />
      <div className="profileheader-parent">
        <div className="profileheader">Profile</div>
        <div className="frame-child" />
        <div className="profilecard">
          <div className="profilecard-child" />
          <div className="frame-parent">
            <div className="link-fa-3jpg-parent">
              <img className="link-fa-3jpg" alt="" src="/link--fa3jpg@2x.png" />
              <div className="containerdominate-parent">
                <div className="containerdominate">@containerdominate</div>
                <div className="level-2">Level 2</div>
              </div>
            </div>
            <img
              className="messageicon"
              alt=""
              src="/messageicon.svg"
              onClick={onMessageIconClick}
            />
          </div>
        </div>
        <div className="stats">
          <div className="trophy">
            <img className="trophyicon" alt="" src="/trophyicon.svg" />
            <div className="trophytext">Commitments Completed</div>
            <div className="trophyvalue">{`13 `}</div>
          </div>
          <div className="star">
            <img className="staricon" alt="" src="/staricon.svg" />
            <div className="startext">badges Earned</div>
            <div className="badges">
              <img className="badge3-icon" alt="" src="/badge3@2x.png" />
              <img className="badge2-icon" alt="" src="/badge2@2x.png" />
              <img className="badge1-icon" alt="" src="/badge1@2x.png" />
            </div>
          </div>
          <div className="clock">
            <img className="clockicon" alt="" src="/clockicon.svg" />
            <div className="clocktext">avg response time</div>
            <div className="clockvalue">2 hrs</div>
          </div>
        </div>
      </div>
      <div className="navbar1">
        <div className="navbar-item" />
        <div className="navbaricons1">
          <img
            className="selected-icon1"
            alt=""
            src="/selected1.svg"
            onClick={onSelectedIconClick}
          />
          <img
            className="taskicon1"
            alt=""
            src="/taskicon1.svg"
            onClick={onTaskIconClick}
          />
          <img
            className="socialicon1"
            alt=""
            src="/socialicon1.svg"
            onClick={onSocialIconClick}
          />
          <img
            className="profileicon1"
            alt=""
            src="/profileicon1.svg"
            onClick={onProfileIconClick}
          />
        </div>
      </div>
    </article>
  );
};

export default ProfilePage;
