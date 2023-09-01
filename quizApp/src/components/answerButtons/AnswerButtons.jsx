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
      ? setTimeout(successful, 3000)
      : setTimeout(unsuccessful, 3000);
    // index == 10 && setIndex(0), (<Score />);
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
