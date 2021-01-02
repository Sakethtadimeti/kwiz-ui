import React from "react";
const QuizStatsComponent = ({ stat, label }) => {
  return (
    <div className="quiz-stats">
      <div className="big-number">{stat}</div>
      <div className="text-label">{label}</div>
    </div>
  );
};

export default QuizStatsComponent;
