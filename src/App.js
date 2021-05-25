import "./App.css";
import Form from "./components/Form";
import Time from "./components/Time";
import MessageField from "./components/MessageField.js";
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [messageList, setMessagelist] = useState([]);

  function inputHandler(event) {
    setMessage(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    if (message) {
      setMessagelist(messageList.concat(message));
      setMessage("");
    }
  }

  useEffect(() => {
    document.addEventListener("touchstart", startHandler);
    document.addEventListener("touchend", endHandler);
  });

  let startX, endX, startY, endY;
  let mindist = 100;
  let maxY = 100;
  function startHandler(event) {
    startX = event.changedTouches[0].clientX;
    startY = event.changedTouches[0].clientY;
  }
  function endHandler(event) {
    endX = event.changedTouches[0].clientX;
    endY = event.changedTouches[0].clientY;
    swaipHandler();
  }
  function swaipHandler() {
    let x = startX - endX;
    let y = Math.abs(startY - endY);
    if (x > mindist && y < maxY) {
      console.log("left");
      document.querySelector("body").scrollLeft += 500;
    }
    if (x < 0 - mindist && y < maxY) {
      console.log("right");
      document.querySelector("body").scrollLeft -= 500;
    }
  }

  return (
    <div className="App">
      <div
        style={{ maxHeight: `${window.innerHeight - 15 + "px"}` }}
        id="first"
        className="first"
      >
        <Form
          message={message}
          inputHandler={inputHandler}
          submitHandler={submitHandler}
        />
        <MessageField messageList={messageList} />
      </div>
      <div
        id="second"
        className="second"
        style={{ height: `${window.innerHeight - 15 + "px"}` }}
      >
        <Time />
      </div>
    </div>
  );
}

export default App;
