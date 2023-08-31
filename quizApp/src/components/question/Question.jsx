import AnswerButtons from "../answerButtons/AnswerButtons";
import "./question.css";
function Question({
  question,
  shuffled,
  index,
  successful,
  unsuccessful,
  func,
}) {
  return (
    <div className="question-container">
      <p className="question-content">{question.question}</p>
      <AnswerButtons
        question={question}
        shuffled={shuffled}
        questionOrder={index}
        successful={successful}
        unsuccessful={unsuccessful}
        func={func}
      />
    </div>
  );
}
export default Question;
