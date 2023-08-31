import "./menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-container">
      <h1>The Best Quiz Game Ever</h1>
      <h4>Answer the questions before the time up!</h4>
      <Link to="/quiz">
        <button className="start-btn">Start</button>
      </Link>
    </div>
  );
}

export default Menu;
