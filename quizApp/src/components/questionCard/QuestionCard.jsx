import Question from "../question/Question";
import "./questionCard.css";
import "../question/question.css";
import { useEffect, useState } from "react";
import MyTimer from "../timer/Timer";

function QuestionCard({ questionList, shuffledList, handleScorePage }) {
  console.log(questionList);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [shuffled, setShuffled] = useState([]);
  const [score, setScore] = useState(0);
  const [notifier, setNotifier] = useState(0);

  useEffect(() => {
    if (questionList.length > 0) {
      setQuestion(questionList[index]);
      setShuffled(shuffledList[index]);
    }
    handleScorePage(score, index);
  }, [questionList, index]);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 30);

  const skipHandler = () => {
    setIndex(index + 1);
    console.log(index);
    setQuestion(questionList[index + 1]);
    setShuffled(shuffledList[index + 1]);
    setNotifier(notifier + 1);
  };
  const func = (resFunc) => {
    resFunc();
  };
  const successful = () => {
    setIndex(index + 1);
    setQuestion(questionList[index + 1]);
    setShuffled(shuffledList[index + 1]);
    setScore(score + 10);
    setNotifier(notifier + 1);
  };
  const unsuccessful = () => {
    setIndex(index + 1);
    setQuestion(questionList[index + 1]);
    setShuffled(shuffledList[index + 1]);
    setScore(score - 5);
    setNotifier(notifier + 1);
  };

  console.log(score);
  // console.log(index);

  return (
    <div className="question-main-container">
      <div className="countdown-container">
        <MyTimer
          expiryTimestamp={time}
          unsuccessful={unsuccessful}
          func={func}
          score={score}
          notifier={notifier}
        />
      </div>
      <div className="score-order">
        <span>{index + 1}</span>
        <span> /{questionList.length}</span>
      </div>
      <Question
        question={question}
        shuffled={shuffled}
        index={index}
        successful={successful}
        unsuccessful={unsuccessful}
        func={func}
        setIndex={setIndex}
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
