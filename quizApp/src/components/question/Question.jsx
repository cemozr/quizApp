import AnswerButtons from "../answerButtons/AnswerButtons";
import "./question.css";
function Question({ question, shuffled }) {
  return (
    <div className="question-container">
      <p className="question-content">{question.question}</p>
      <AnswerButtons question={question} shuffled={shuffled} />
    </div>
  );
}
export default Question;
