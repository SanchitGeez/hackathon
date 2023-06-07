import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Social3.css";
const Social3 = () => {
  const navigate = useNavigate();

  const onProfileIconImageClick = useCallback(() => {
    navigate("/profile-page");
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
    <article className="social-3">
      <img className="bg-icon1" alt="" src="/bg@2x.png" />
      <img
        className="profileicon2"
        alt=""
        src="/profileicon2@2x.png"
        onClick={onProfileIconImageClick}
      />
      <div className="navbar2">
        <div className="navbar-inner" />
        <div className="navbaricons2">
          <img
            className="selected-icon2"
            alt=""
            src="/selected2.svg"
            onClick={onSelectedIconClick}
          />
          <img
            className="taskicon2"
            alt=""
            src="/taskicon2.svg"
            onClick={onTaskIconClick}
          />
          <img
            className="socialicon2"
            alt=""
            src="/socialicon2.svg"
            onClick={onSocialIconClick}
          />
          <img
            className="profileicon3"
            alt=""
            src="/profileicon3.svg"
            onClick={onProfileIconClick}
          />
        </div>
      </div>
      <div className="socialheader-parent">
        <div className="socialheader">social</div>
        <div className="frame-item" />
        <div className="frame-inner" />
        <div className="frame-group">
          <div className="link-parent">
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div">
                  <div className="link1">
                    <div className="babyman">@babyMan</div>
                    <div className="link-child" />
                  </div>
                  <div className="dbms">DBMS</div>
                </div>
                <div className="divauction-end">
                  <div className="commitment-ends-in">Commitment ends in:</div>
                  <div className="divd-flex">
                    <div className="div">21</div>
                    <div className="div1">:</div>
                    <div className="div2">53</div>
                    <div className="div1">:</div>
                    <div className="div2">12</div>
                  </div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa18jpg@2x.png"
                />
              </div>
            </div>
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div1">
                  <div className="link3">
                    <div className="afro">@afro</div>
                    <div className="link-item" />
                  </div>
                  <div className="oops">OOPS</div>
                </div>
                <div className="divauction-end1">
                  <div className="commitment-ends-in">Commitment ends in:</div>
                  <div className="divd-flex">
                    <div className="div">05</div>
                    <div className="div1">:</div>
                    <div className="div2">53</div>
                    <div className="div1">:</div>
                    <div className="div2">12</div>
                  </div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa17jpg@2x.png"
                />
              </div>
            </div>
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div2">
                  <div className="link5">
                    <div className="aesto-naz">@aesto_naz</div>
                    <div className="link-inner" />
                  </div>
                  <div className="discrete-mathematics">
                    Discrete Mathematics
                  </div>
                </div>
                <div className="divauction-end2">
                  <div className="commitment-ends-in">Commitment ends in:</div>
                  <div className="divd-flex">
                    <div className="div">01</div>
                    <div className="div1">:</div>
                    <div className="div2">25</div>
                    <div className="div1">:</div>
                    <div className="div2">12</div>
                  </div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa16jpg@2x.png"
                />
              </div>
            </div>
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div2">
                  <div className="link5">
                    <div className="arvin">@arvin</div>
                    <div className="ellipse-div" />
                  </div>
                  <div className="complex-numbers">
                    <span className="complex-numbers-txt-container">
                      <p className="complex-numbers1">Complex Numbers</p>
                    </span>
                  </div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa1jpg1@2x.png"
                />
                <div className="divauction-end3">
                  <div className="commitment-ends-in">Commitment ends in:</div>
                  <div className="divd-flex">
                    <div className="div">11</div>
                    <div className="div1">:</div>
                    <div className="div2">53</div>
                    <div className="div1">:</div>
                    <div className="div2">12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="link-group">
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div2">
                  <div className="link5">
                    <div className="jellyfishvolleyball">
                      @jellyfishvolleyball
                    </div>
                    <div className="link-child1" />
                  </div>
                  <div className="java-programming">JAVA Programming</div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa11jpg3@2x.png"
                />
                <div className="divauction-end4">
                  <div className="commitment-ends-in">Commitment ends in:</div>
                  <div className="divd-flex">
                    <div className="div">11</div>
                    <div className="div1">:</div>
                    <div className="div2">53</div>
                    <div className="div1">:</div>
                    <div className="div2">12</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div5">
                  <div className="link5">
                    <div className="inningdepressed">@inningdepressed</div>
                    <div className="link-child2" />
                  </div>
                  <div className="control-systems">Control Systems</div>
                </div>
                <div className="divauction-end4">
                  <div className="commitment-ends-in">No Tasks Remaining</div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa13jpg@2x.png"
                />
              </div>
            </div>
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div6">
                  <div className="link5">
                    <div className="literaturemedal">@literaturemedal</div>
                  </div>
                </div>
                <div className="divauction-end6">
                  <div className="commitment-ends-in">No Tasks Remaining</div>
                </div>
                <div className="divavatars-child" />
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa24jpg@2x.png"
                />
              </div>
            </div>
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div7">
                  <div className="link5">
                    <div className="containerdominate1">@containerdominate</div>
                    <div className="link-child3" />
                  </div>
                  <div className="divauction-end7">
                    <div className="commitment-ends-in">
                      Commitment ends in:
                    </div>
                    <div className="divd-flex">
                      <div className="div">11</div>
                      <div className="div1">:</div>
                      <div className="div2">53</div>
                      <div className="div1">:</div>
                      <div className="div2">12</div>
                    </div>
                  </div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa3jpg1@2x.png"
                />
                <div className="discrete-mathematics1">
                  Discrete Mathematics
                </div>
              </div>
            </div>
          </div>
          <div className="link-group">
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div6">
                  <div className="link5">
                    <div className="ribbitsowse">@ribbitsowse</div>
                    <div className="link-child4" />
                  </div>
                  <div className="divauction-end8">
                    <div className="commitment-ends-in">
                      Commitment ends in:
                    </div>
                    <div className="divd-flex">
                      <div className="div">11</div>
                      <div className="div1">:</div>
                      <div className="div2">53</div>
                      <div className="div1">:</div>
                      <div className="div2">12</div>
                    </div>
                  </div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa23jpg1@2x.png"
                />
              </div>
            </div>
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div6">
                  <div className="link5">
                    <div className="flashyplop">@flashyplop</div>
                    <div className="link-child5" />
                  </div>
                </div>
                <div className="divauction-end4">
                  <div className="commitment-ends-in">No Tasks Remaining</div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa1jpg1@2x.png"
                />
              </div>
            </div>
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div6">
                  <div className="link5">
                    <div className="artichokestinker">@artichokestinker</div>
                    <div className="link-child6" />
                  </div>
                </div>
                <div className="divauction-end10">
                  <div className="commitment-ends-in">Commitment ends in:</div>
                  <div className="divd-flex">
                    <div className="div">11</div>
                    <div className="div1">:</div>
                    <div className="div2">53</div>
                    <div className="div1">:</div>
                    <div className="div2">12</div>
                  </div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa21jpg@2x.png"
                />
                <div className="discrete-mathematics2">
                  Discrete Mathematics
                </div>
              </div>
            </div>
            <div className="link">
              <div className="divavatars">
                <div className="divcreator-info-div6">
                  <div className="link5">
                    <div className="sovietsponge">@sovietsponge</div>
                    <div className="link-child7" />
                  </div>
                  <div className="no-tasks-remaining3">No Tasks Remaining</div>
                </div>
                <img
                  className="link-fa-18jpg"
                  alt=""
                  src="/link--fa7jpg@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Social3;
