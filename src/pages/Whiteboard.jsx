import React, { useEffect } from 'react';
import './Whiteboard.css';
// import 'font-awesome/css/font-awesome.css';
import io from 'socket.io-client'; // assuming you have installed the socket.io-client package
import $ from 'jquery';

const App = () => {
  useEffect(() => {
    const board_url = window.location.href;
    $('.linkToBoard').attr('href', board_url);
  }, []);}

const Whiteboard = () => {
  return (
    <div>
        <canvas className="whiteboard"></canvas>

<div className="head">
  <strong> </strong> - Share this{' '}
  <a className="linkToBoard" style={{ cursor: 'pointer', color: '#32056d' }} target="_blank">
    link
  </a>{' '}
  with others to collaborate <strong>Cool, isn't?</strong>
</div>

<div className="colors">
  <div className="color black"></div>
  <div className="color red"></div>
  <div className="color green"></div>
  <div className="color blue"></div>
  <div className="color yellow"></div>
  <div className="color white">
    <i className="fa fa-eraser fa-2x eraser" aria-hidden="true"></i>
  </div>
</div>

<div className="sizes">
  <div className="size 2 two">X</div>
  <div className="size 4 four">2X</div>
  <div className="size 8 six">4X</div>
  <div className="size 10 ten">5X</div>
  <div id="clear-all" className="size clear-all">
    Clear All
  </div>
</div>

<div className="communication-conatiner">
  <div className="textConatiner">
    <ul className="pages">
      <li className="chat page">
        <div className="chatArea">
          <ul className="messages"></ul>
        </div>
        <input className="inputMessage" placeholder="Type Here..." />
      </li>
      <li className="login page">
        <div className="form">
          <h3 className="title">What's your nickname?</h3>
          <input className="usernameInput" type="text" maxLength="14" />
          <h5 className="credit">
            <a className="githubLink" href="https://github.com/elementrix05">
              StudyBuddy
            </a>
          </h5>
        </div>
      </li>
    </ul>
  </div>
</div>

<script src="/socket.io/socket.io.js"></script>
<script src="main.js"></script>
<script src="chat.js"></script>
    </div>
  )
}

export default Whiteboard