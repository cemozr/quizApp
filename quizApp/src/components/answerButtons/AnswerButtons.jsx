import { useEffect } from "react";
import { useState } from "react";

function AnswerButtons({ question, shuffled }) {
  //console.log(question.correct_answer);
  //console.log(shuffled);
  const [correctIndex, setCorrectIndex] = useState(-1);
  const [answered, setAnswered] = useState(-1);
  const wrongAnswers = question.incorrect_answers;
  const trueAnswer = question.correct_answer;
  for (let i = 0; i < shuffled.length; ++i) {
    if (shuffled[i] == trueAnswer) {
      if (correctIndex != i) {
        setCorrectIndex(i);
      }

      console.log(i);
      break;
    }
  }
  const onClickHandler = (index) => {
    console.log(correctIndex, index);
    setAnswered(index);
  };

  return (
    <>
      <button
        className="answer-choice"
        style={answered == correctIndex ? { color: "green" } : { color: "red" }}
        onClick={() => {
          onClickHandler(0);
        }}
      >
        {shuffled[0]}
      </button>
      <button
        className="answer-choice"
        style={answered == correctIndex ? { color: "green" } : { color: "red" }}
        onClick={() => {
          onClickHandler(1);
        }}
      >
        {shuffled[1]}
      </button>
      <button
        className="answer-choice"
        style={answered == correctIndex ? { color: "green" } : { color: "red" }}
        onClick={() => {
          onClickHandler(2);
        }}
      >
        {shuffled[2]}
      </button>
      <button
        className="answer-choice"
        style={answered == correctIndex ? { color: "green" } : { color: "red" }}
        onClick={() => {
          onClickHandler(3);
        }}
      >
        {shuffled[3]}
      </button>
    </>
  );
}
export default AnswerButtons;
