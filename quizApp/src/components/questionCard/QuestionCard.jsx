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
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (questionList.length > 0) {
      setQuestion(questionList[index]);
      setShuffled(shuffledList[index]);
    }
  }, [questionList, index]);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

  const skipHandler = () => {
    setIndex(index + 1);
    console.log(index);
    setQuestion(questionList[index + 1]);
    setShuffled(shuffledList[index + 1]);
  };
  const successful = () => {
    setIndex(index + 1);
    setQuestion(questionList[index + 1]);
    setShuffled(shuffledList[index + 1]);
    setScore(score + 1);
  };
  const unsuccessful = () => {
    setIndex(index + 1);
    setQuestion(questionList[index + 1]);
    setShuffled(shuffledList[index + 1]);
    setScore(score - 1);
  };
  const func = (resFunc) => {
    resFunc();
  };
  console.log(score);
  return (
    <div className="question-main-container">
      <div className="countdown-container">
        <MyTimer
          expiryTimestamp={time}
          unsuccessful={unsuccessful}
          func={func}
        />
      </div>
      <div className="score-order">
        <span>{index + 1}</span>
        <span> /{questionList.length}</span>
      </div>
      <Question
        question={question}
        shuffled={shuffled}
        questionOrder={index}
        successful={successful}
        unsuccessful={unsuccessful}
        resFunc={func}
      />
      <div>
        <button onClick={skipHandler} className="next-btn">
          Skip
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
