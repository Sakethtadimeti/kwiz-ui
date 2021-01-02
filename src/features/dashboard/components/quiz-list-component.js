import React from "react";
import map from "lodash/map";
import QuizOverviewCard from "./quiz-overview-card";
const QuizList = (props) => {
  const { quizzes } = props;

  return (
    <div className="kwiz-quiz-list">
      {map(quizzes, (quiz) => {
        const { _id: quizId, title = "" } = quiz;
        return (
          <QuizOverviewCard
            key={quizId}
            title={title}
            questions={10}
            difficulty={"4.8/5.0"}
          />
        );
      })}
    </div>
  );
};

export default QuizList;
