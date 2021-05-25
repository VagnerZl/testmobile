import React from "react";
import "./MessageField.css";

export default function MessageField(props) {
  const MassageItems = props.messageList.map((message) => (
    <li key={message}>
      <span className="typing">{message}</span>
    </li>
  ));

  return <ul>{MassageItems}</ul>;
}
