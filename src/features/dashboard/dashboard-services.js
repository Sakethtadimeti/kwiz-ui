import { fetchJSON } from "../../services/http-utils";

export const getAllQuizzes = () => {
  return fetchJSON("http://localhost:8000/api/v1/quizzes");
};
