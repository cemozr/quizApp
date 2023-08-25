import { useEffect } from "react";
import { useState } from "react";

function AnswerButtons({ question, shuffled, index, successful }) {
  // console.log(shuffled);
  // console.log(question);
  const trueAnswer = question.correct_answer;
  const [isSkipped, setIsSkipped] = useState(false);
  // useEffect(() => {}, [isSkipped]);
  const answerCheck = (e) => {
    e.target.value == trueAnswer && setTimeout(successful, 3000);
    e.target.value == trueAnswer
      ? e.target.classList.add("true-answer")
      : e.target.classList.add("false-answer");
    setIsSkipped(true);
    isSkipped && e.target.classList.remove("true-answer"),
      e.target.classList.remove("false-answer");
  };
  return (
    <>
      {shuffled.map((choice, i) => {
        return (
          <button
            onClick={answerCheck}
            className="answer-choice"
            value={choice}
            key={i}
          >
            {choice}
          </button>
        );
      })}
    </>
  );
}
export default AnswerButtons;
