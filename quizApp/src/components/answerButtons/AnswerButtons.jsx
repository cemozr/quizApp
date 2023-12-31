import { useEffect } from "react";
import { useState } from "react";

function AnswerButtons({
  question,
  shuffled,
  index,
  successful,
  unsuccessful,
  func,
  setIndex,
}) {
  const trueAnswer = question.correct_answer;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const answerCheck = (e) => {
    if (selectedAnswer != "") return;
    setSelectedAnswer(e.target.value);
    e.target.value == trueAnswer
      ? setTimeout(successful, 2000)
      : setTimeout(unsuccessful, 2000);
  };
  useEffect(() => {
    setSelectedAnswer("");
  }, [shuffled]);
  return (
    <>
      {index < 10 &&
        shuffled.map((choice, i) => {
          return (
            <button
              onClick={answerCheck}
              className={
                selectedAnswer != choice
                  ? "answer-choice"
                  : choice == trueAnswer
                  ? "true-answer answer-choice"
                  : "false-answer answer-choice"
              }
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
