import { useEffect } from "react";
import { useState } from "react";

function AnswerButtons({ question, shuffled, index }) {
  // console.log(shuffled);

  const [correctIndex, setCorrectIndex] = useState(-1);
  const [answered, setAnswered] = useState(-1);
  const wrongAnswers = question.incorrect_answers;
  const trueAnswer = question.correct_answer;
  console.log(trueAnswer);
  for (let i = 0; i < shuffled.length; ++i) {
    if (shuffled[i] == trueAnswer) {
      if (correctIndex != i) {
        setCorrectIndex(i);
      }

      // console.log(i);
      break;
    }
  }

  const onClickHandler = (event) => {
    console.log(event.target.getAttribute("value"));
    setAnswered(event.target.getAttribute("value"));
  };

  useEffect(() => {}, [answered]);

  return (
    <>
      {shuffled.map((choice, i) => {
        return (
          <button
            className={
              answered != i
                ? "answer-choice"
                : answered == correctIndex
                ? "answer-choice true-answer"
                : "answer-choice false-answer"
            }
            onClick={onClickHandler}
            value={i}
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
