import { useEffect } from "react";
import { useState } from "react";

function AnswerButtons({
  question,
  shuffled,
  index,
  successful,
  unsuccessful,
  func,
}) {
  // console.log(shuffled);
  // console.log(question);
  const trueAnswer = question.correct_answer;
  const [isSkipped, setIsSkipped] = useState(false);
  const [className, setClassName] = useState("answer-choice");
  // useEffect(() => {}, [isSkipped]);
  const answerCheck = (e) => {
    func();
    e.target.value == trueAnswer
      ? setTimeout(successful, 3000)
      : setTimeout(unsuccessful, 3000);
    e.target.value == trueAnswer
      ? setClassName("true-answer answer-choice")
      : setClassName("false-answer answer-choice");
  };
  useEffect(() => {
    setClassName("answer-choice");
  }, [shuffled]);
  return (
    <>
      {shuffled.map((choice, i) => {
        return (
          <button
            onClick={answerCheck}
            className={className}
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
