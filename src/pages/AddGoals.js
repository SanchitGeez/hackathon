import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AddGoals.css";
const AddGoals = () => {
  const navigate = useNavigate();

  const onProfileIconImageClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onAddGoalHeaderTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bgImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLineClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleInput2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleInput2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleInput1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleInput1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleInput']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAddGoalButtonContainerClick = useCallback(() => {
    navigate("/my-goals");
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
    <article className="add-goals">
      <img
        className="bg-icon3"
        alt=""
        src="/bg@2x.png"
        data-scroll-to="bgImage"
      />
      <img
        className="profileicon6"
        alt=""
        src="/profileicon2@2x.png"
        onClick={onProfileIconImageClick}
      />
      <div className="addgoalheader-parent">
        <div className="addgoalheader" onClick={onAddGoalHeaderTextClick}>
          add a New Goal
        </div>
        <img
          className="line-icon"
          alt=""
          src="/line-1.svg"
          onClick={onLineClick}
        />
        {/* <div
          className="frame-child1"
          data-scroll-to="rectangle"
          onClick={onRectangleClick}
        />
        <input
          className="rectangle-input"
          type="text"
          data-scroll-to="rectangleInput2"
          onClick={onRectangleInput2Click}
        />
        <div className="rectangle-parent">
          <input
            className="frame-child2"
            type="text"
            data-scroll-to="rectangleInput1"
            onClick={onRectangleInput1Click}
          />
          <input
            className="frame-child3"
            type="text"
            data-scroll-to="rectangleInput"
          />
        </div> */}

        <form className='add-goal-form'>
            <input className='bg-stone-50 add-goals-input subject-prop' placeholder='Subject'></input>
            <input className='bg-stone-50 add-goals-input topic-prop' placeholder='Topic'></input>
            <div className='date-container'>
             <input className='bg-stone-50 add-goals-input date-prop' placeholder='Date'></input>
             <input className='bg-stone-50 add-goals-input month-prop' placeholder='Month'></input>
            </div>
            <button className='bg-stone-50 add-goals-button' type='Submit'>ADD GOAL +</button>
            
        </form>

        <div className="addgoalbutton" onClick={onAddGoalButtonContainerClick}>
          <div className="addgoalbutton-child" />
          <div className="addgoaltext">
            <div className="add-goal">{`Add goal `}</div>
            <img className="plusicon" alt="" src="/plusicon.svg" />
          </div>
        </div>
      </div>
      <div className="navbar4">
        <div className="navbar-child2" />
        <div className="navbaricons4">
          <img
            className="selected-icon4"
            alt=""
            src="/selected4.svg"
            onClick={onSelectedIconClick}
          />
          <img
            className="taskicon4"
            alt=""
            src="/taskicon4.svg"
            onClick={onTaskIconClick}
          />
          <img
            className="socialicon4"
            alt=""
            src="/socialicon4.svg"
            onClick={onSocialIconClick}
          />
          <img
            className="profileicon7"
            alt=""
            src="/profileicon5.svg"
            onClick={onProfileIconClick}
          />
        </div>
      </div>
    </article>
  );
};

export default AddGoals;
