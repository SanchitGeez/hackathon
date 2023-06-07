import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ForumChat.css";
const ForumChat = () => {
  const navigate = useNavigate();

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
    <article className="forum-chat">
      <div className="forum-chat-child" />
      <img
        className="link-img-3898webp"
        alt=""
        src="/link--img-3898webp@2x.png"
      />
      <img className="link-fa-11jpg" alt="" src="/link--fa11jpg@2x.png" />
      <img className="link-fa-11jpg1" alt="" src="/link--fa11jpg1@2x.png" />
      <img className="link-fa-11jpg2" alt="" src="/link--fa11jpg2@2x.png" />
      <img className="link-fa-23jpg" alt="" src="/link--fa23jpg@2x.png" />
      <div className="forum-chat-item" />
      <div className="forum-chat-inner" />
      <div className="rectangle-div" />
      <div className="forum-chat-child1" />
      <div className="forum-chat-child2" />
      <div className="forum-chat-child3" />
      <img className="link-fa-1jpg" alt="" src="/link--fa1jpg@2x.png" />
      <div className="operating-system-design">Operating System Design</div>
      <div className="navbar">
        <div className="navbar-child" />
        <div className="navbaricons">
          <img
            className="selected-icon"
            alt=""
            src="/selected.svg"
            onClick={onSelectedIconClick}
          />
          <img
            className="taskicon"
            alt=""
            src="/taskicon.svg"
            onClick={onTaskIconClick}
          />
          <img
            className="socialicon"
            alt=""
            src="/socialicon.svg"
            onClick={onSocialIconClick}
          />
          <img
            className="profileicon"
            alt=""
            src="/profileicon.svg"
            onClick={onProfileIconClick}
          />
        </div>
      </div>
      
      <div className="icon-attachment-parent">
        <img className="icon-attachment" alt="" src="/-icon-attachment.svg" />
        <a className="icon-group">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="vector-icon1" alt="" src="/vector1.svg" />
          <img className="vector-icon2" alt="" src="/vector2.svg" />
          <img className="vector-icon3" alt="" src="/vector3.svg" />
        </a>
        <img className="icon-info-empty" alt="" src="/-icon-info-empty.svg" />
      </div>
      <div className="icon-emoji-parent">
        <img className="icon-emoji" alt="" src="/-icon-emoji.svg" />
        <div className="link-heading">Type a message....</div>
        <img className="icon-send" alt="" src="/-icon-send.svg" />
      </div>
    </article>
  );
};

export default ForumChat;
