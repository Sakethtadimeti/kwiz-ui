import React, { useEffect, useState } from "react";
import { PageContainer } from "../../common/components";
import "./dashboard.scss";
import { getAllQuizzes } from "./dashboard-services";
import get from "lodash/get";
import { QuizList } from "./components";

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState({});
  useEffect(() => {
    async function fetchQuizData() {
      const quizData = await getAllQuizzes();
      console.log(get(quizData, "data", {}));
      setQuizzes(get(quizData, "data", {}));
    }
    fetchQuizData();
  }, []);
  return (
    <PageContainer>
      <h1 className="welcome-text">{`Welcome Saketh`}</h1>
      <h3>
        Quis proident exercitation ut officia eiusmod adipisicing esse
        consectetur.
      </h3>
      <QuizList quizzes={quizzes} />
    </PageContainer>
  );
};

export default Dashboard;
