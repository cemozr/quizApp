import AnswerButtons from "../answerButtons/AnswerButtons";
import "./question.css";
function Question({
  question,
  shuffled,
  index,
  successful,
  unsuccessful,
  func,
  setIndex,
}) {
  return (
    <div className="question-container">
      <p className="question-content">{index < 10 && question.question}</p>
      <AnswerButtons
        question={question}
        shuffled={shuffled}
        index={index}
        successful={successful}
        unsuccessful={unsuccessful}
        func={func}
        setIndex={setIndex}
      />
    </div>
  );
}
export default Question;
