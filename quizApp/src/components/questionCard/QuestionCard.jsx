import Question from "../question/Question";
import "./questionCard.css";
import "../question/question.css";
import { useEffect, useState } from "react";
import MyTimer from "../timer/Timer";

function QuestionCard({ questionList, shuffledList }) {
  console.log(questionList);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [shuffled, setShuffled] = useState([]);

  useEffect(() => {
    if (questionList.length > 0) {
      setQuestion(questionList[index]);
      setShuffled(shuffledList[index]);
    }
  }, [questionList]);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 30);

  return (
    <div className="question-main-container">
      <div className="countdown-container">
        <MyTimer expiryTimestamp={time} />
      </div>
      <div className="score-order">
        <span>{index + 1}</span>
        <span> /{questionList.length}</span>
      </div>
      <Question question={question} shuffled={shuffled} />
      <div>
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}

export default QuestionCard;
