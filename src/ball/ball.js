import React, { useState } from "react";
import "./ball.css";

export default function Ball() {
  const [pushBall, setpushBall] = useState(0);

  const style = { left: pushBall + "px" };

  function move() {
    setpushBall((previousPosition) => {
      return previousPosition + 20;
    });
  }

  return <div className="ball" onClick={move} style={style}></div>;
}
