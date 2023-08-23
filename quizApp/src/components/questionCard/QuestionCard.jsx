import Question from "../question/Question";
import "./questionCard.css";
import "../question/question.css";
import { useEffect, useState } from "react";
function QuestionCard({ questionList }) {
  console.log(questionList);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  useEffect(() => {
    if (questionList.length > 0) {
      setQuestion(questionList[index]);
    }
  }, [questionList]);
  return (
    <div className="question-main-container">
      <div className="countdown-container">
        <progress id="progress-bar" value="32" max="100">
          {" "}
          32%{" "}
        </progress>
      </div>

      <div className="question-container">
        <h4 className="question-order"></h4>
        <p className="question-content">{question.question}</p>
        <button className="answer-choice">{question.incorrect_answers}</button>
        <button className="answer-choice">{question.incorrect_answers}</button>
        <button className="answer-choice">{question.correct_answer}</button>
        <button className="answer-choice">{question.incorrect_answers}</button>
      </div>

      <div>
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}

export default QuestionCard;
