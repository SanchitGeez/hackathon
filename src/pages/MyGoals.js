import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MyGoals.css";
const MyGoals = () => {
  const navigate = useNavigate();

  const onAddGoalButtonContainerClick = useCallback(() => {
    navigate("/add-goals");
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

  const onProfileIconImageClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <article className="my-goals">
      <img className="bg-icon4" alt="" src="/bg@2x.png" />
      <div className="divrow">
        <div className="divcard-item-parent">
          <div className="divcard-item">
            <div className="divcard-head">
              <img
                className="link-img-3901jpg"
                alt=""
                src="/link--img-3901jpg@2x.png"
              />
              <div className="divdetails">
                <div className="divfire-div">
                  <img
                    className="path-19png-icon"
                    alt=""
                    src="/path-19png@2x.png"
                  />
                </div>
                <div className="divauction-end11">
                  <div className="commitment-ends">Commitment ends</div>
                  <div className="divd-flex8">
                    <div className="div40">12</div>
                    <div className="div41">:</div>
                    <div className="div42">53</div>
                    <div className="div43">:</div>
                    <div className="div44">12</div>
                  </div>
                </div>
                <div className="diveth-div">
                  <div className="div45">
                    <img
                      className="brand-ethereum-icon-158920png"
                      alt=""
                      src="/brand-ethereum-icon-158920png@2x.png"
                    />
                  </div>
                </div>
                <div className="divmy-flex-column">
                  <div className="commitment-ends">Current progress</div>
                  <div className="span-bold">
                    <div className="div46">2 %</div>
                  </div>
                </div>
                <div className="link24">
                  <div className="study">study</div>
                </div>
              </div>
            </div>
            <div className="discrete-mathematics3">Discrete Mathematics</div>
          </div>
          <div className="divcard-item">
            <div className="divcard-head1">
              <img
                className="link-img-3902jpg"
                alt=""
                src="/link--img-3902jpg@2x.png"
              />
              <div className="divdetails1">
                <div className="divfire-div1">
                  <img
                    className="path-19png-icon"
                    alt=""
                    src="/path-19png@2x.png"
                  />
                </div>
                <div className="divauction-end12">
                  <div className="commitment-ends">commitment ends</div>
                  <div className="divd-flex9">
                    <div className="div47">23</div>
                    <div className="div48">:</div>
                    <div className="div49">53</div>
                    <div className="div50">:</div>
                    <div className="div51">12</div>
                  </div>
                </div>
                <div className="diveth-div1">
                  <div className="div45">
                    <img
                      className="brand-ethereum-icon-158920png"
                      alt=""
                      src="/brand-ethereum-icon-158920png1@2x.png"
                    />
                  </div>
                </div>
                <div className="divmy-flex-column1">
                  <div className="commitment-ends">Current Progress</div>
                  <div className="span-bold1">
                    <div className="div46">2.2 %</div>
                  </div>
                </div>
                <div className="link25">
                  <div className="study">study</div>
                </div>
              </div>
            </div>
            <div className="complex-numbers2">
              <span className="complex-numbers-txt-container1">
                <p className="complex-numbers3">Complex Numbers</p>
              </span>
            </div>
          </div>
          <div className="divcard-item">
            <div className="divcard-head2">
              <img
                className="link-img-3902jpg"
                alt=""
                src="/link--img-3900jpg@2x.png"
              />
              <div className="divdetails1">
                <div className="divfire-div1">
                  <img
                    className="path-19png-icon"
                    alt=""
                    src="/path-19png@2x.png"
                  />
                </div>
                <div className="divauction-end13">
                  <div className="commitment-ends">commitment ends</div>
                  <div className="divd-flex10">
                    <div className="div54">16</div>
                    <div className="div55">:</div>
                    <div className="div56">53</div>
                    <div className="div57">:</div>
                    <div className="div58">12</div>
                  </div>
                </div>
                <div className="diveth-div2">
                  <div className="div59">
                    <img
                      className="brand-ethereum-icon-158920png2"
                      alt=""
                      src="/brand-ethereum-icon-158920png2@2x.png"
                    />
                  </div>
                </div>
                <div className="divmy-flex-column2">
                  <div className="commitment-ends">Current progress</div>
                  <div className="span-bold2">
                    <div className="div46">8 %</div>
                  </div>
                </div>
                <div className="link26">
                  <div className="study">study</div>
                </div>
              </div>
            </div>
            <div className="control-systems1">Control Systems</div>
          </div>
        </div>
        <div className="divcard-item-group">
          <div className="divcard-item3">
            <div className="divcard-head3">
              <img
                className="link-img-3902jpg"
                alt=""
                src="/link--img-3898webp1@2x.png"
              />
              <div className="divdetails1">
                <div className="divfire-div1">
                  <img
                    className="path-19png-icon"
                    alt=""
                    src="/path-19png@2x.png"
                  />
                </div>
                <div className="divauction-end14">
                  <div className="commitment-ends">commitment ends</div>
                  <div className="divd-flex11">
                    <div className="div61">11</div>
                    <div className="div62">:</div>
                    <div className="div63">53</div>
                    <div className="div62">:</div>
                    <div className="div63">12</div>
                  </div>
                </div>
                <div className="diveth-div3">
                  <div className="div66">
                    <img
                      className="brand-ethereum-icon-158920png3"
                      alt=""
                      src="/brand-ethereum-icon-158920png1@2x.png"
                    />
                  </div>
                </div>
                <div className="divmy-flex-column3">
                  <div className="commitment-ends">Current progress</div>
                  <div className="span-bold3">
                    <div className="div46">5 %</div>
                  </div>
                </div>
                <div className="link27">
                  <div className="study">study</div>
                </div>
              </div>
            </div>
          </div>
          <div className="divcard-item">
            <div className="divcard-head4">
              <img
                className="link-img-3897webp"
                alt=""
                src="/link--img-3897webp@2x.png"
              />
              <div className="divdetails1">
                <div className="divfire-div1">
                  <img
                    className="path-19png-icon"
                    alt=""
                    src="/path-19png1@2x.png"
                  />
                </div>
                <div className="divauction-end15">
                  <div className="commitment-ends">commitment ends</div>
                  <div className="divd-flex12">
                    <div className="div68">00</div>
                    <div className="div69">:</div>
                    <div className="div70">53</div>
                    <div className="div71">:</div>
                    <div className="div72">12</div>
                  </div>
                </div>
                <div className="diveth-div4">
                  <div className="div73">
                    <img
                      className="brand-ethereum-icon-158920png4"
                      alt=""
                      src="/brand-ethereum-icon-158920png3@2x.png"
                    />
                  </div>
                </div>
                <div className="divmy-flex-column4">
                  <div className="commitment-ends">Current progress</div>
                  <div className="span-bold4">
                    <div className="div46">2 %</div>
                  </div>
                </div>
                <div className="link28">
                  <div className="study">study</div>
                </div>
              </div>
            </div>
          </div>
          <div className="divcard-item">
            <div className="divcard-head5">
              <img
                className="link-img-3902jpg"
                alt=""
                src="/link--img-3896webp@2x.png"
              />
              <div className="divdetails1">
                <div className="divfire-div1">
                  <img
                    className="path-19png-icon"
                    alt=""
                    src="/path-19png@2x.png"
                  />
                </div>
                <div className="divauction-end16">
                  <div className="commitment-ends">commitment ends</div>
                  <div className="divd-flex13">
                    <div className="div68">08</div>
                    <div className="div76">:</div>
                    <div className="div77">53</div>
                    <div className="div78">:</div>
                    <div className="div79">12</div>
                  </div>
                </div>
                <div className="diveth-div5">
                  <div className="div80">
                    <img
                      className="brand-ethereum-icon-158920png4"
                      alt=""
                      src="/brand-ethereum-icon-158920png4@2x.png"
                    />
                  </div>
                </div>
                <div className="divmy-flex-column5">
                  <div className="commitment-ends">Current progress</div>
                  <div className="span-bold5">
                    <div className="div46">5 %</div>
                  </div>
                </div>
                <div className="link27">
                  <div className="study">study</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mygoalsheader-parent">
        <div className="mygoalsheader">{`Connect , Study & Achieve`}</div>
        <img className="frame-child4" alt="" src="/line-1.svg" />
        <div className="addgoalbutton1" onClick={onAddGoalButtonContainerClick}>
          <div className="addgoalbutton-item" />
          <div className="addgoaltext1">
            <div className="add-goal1">{`Add goal `}</div>
            <img className="plusicon1" alt="" src="/plusicon.svg" />
          </div>
        </div>
      </div>
      <div className="navbar5">
        <div className="navbar-child3" />
        <div className="navbaricons5">
          <img
            className="selected-icon5"
            alt=""
            src="/selected5.svg"
            onClick={onSelectedIconClick}
          />
          <img
            className="taskicon5"
            alt=""
            src="/taskicon5.svg"
            onClick={onTaskIconClick}
          />
          <img
            className="socialicon5"
            alt=""
            src="/socialicon5.svg"
            onClick={onSocialIconClick}
          />
          <img
            className="profileicon8"
            alt=""
            src="/profileicon6.svg"
            onClick={onProfileIconClick}
          />
        </div>
      </div>
      <img
        className="profileicon9"
        alt=""
        src="/profileicon2@2x.png"
        onClick={onProfileIconImageClick}
      />
    </article>
  );
};

export default MyGoals;
