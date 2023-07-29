import React from "react";
import Answers from "./Answers";
import "./EightBall.css";
import { useState } from "react";
import { maxSatisfying } from "semver";

const EightBall = ({ answers = Answers }) => {
  const randomizeAnswer = () => {
    const randomNum = Math.floor(Math.random() * 19);
    SetColor(answers[randomNum].color);
    SetText(answers[randomNum].msg);
  };
  const [iniColor, SetColor] = useState("black");
  const [iniText, SetText] = useState("Think of a Question");
  return (
    <>
      <div>
        <span
          className={"dot"}
          style={{
            backgroundColor: iniColor,
            color: iniColor === "black" ? "white" : "",
          }}
        >
          {iniText}
        </span>
      </div>
      <button onClick={() => randomizeAnswer()}>Generate Answer</button>
    </>
  );
};

export default EightBall;
