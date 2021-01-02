import React from "react";
import { Card } from "rebass";
import QuizStatsComponent from "./quiz-stat-component";
import { FaRegPlayCircle } from "react-icons/fa";
import { getGradientColors } from "../../../common/utils/general-utils";

const QuizOverview = ({ title, difficulty, questions, tags }) => {
  const { startColor, endColor } = getGradientColors();
  return (
    <Card
      sx={{
        borderRadius: 6,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
      }}
      className="quiz-overview-card"
    >
      <div
        className="quiz-title"
        style={{
          background: `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)`,
        }}
      >
        <h2>{title}</h2>
      </div>
      <div className="quiz-info-bar">
        <QuizStatsComponent stat={questions} label={"Questions"} />
        <QuizStatsComponent stat={difficulty} label={"Difficulty"} />
        <FaRegPlayCircle
          className="take-quiz-btn"
          onClick={() => console.log("Clicked")}
        />
      </div>
    </Card>
  );
};

export default QuizOverview;
