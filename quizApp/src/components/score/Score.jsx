import "./score.css";
import { Link } from "react-router-dom";
function Score({ lastScore, menuButtonClicked }) {
  return (
    <div className="score-page-container">
      <h1 className="congratz-text">Congratz!</h1>
      <h2>Your Score: {lastScore}</h2>
      {lastScore < 50 ? <h2>Nice Try!</h2> : <h2>Well Done!</h2>}
      <button className="menu-btn" onClick={menuButtonClicked}>
        Return to Menu{" "}
      </button>
    </div>
  );
}

export default Score;
