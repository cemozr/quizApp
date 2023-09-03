import { useState } from "react";
import "./App.css";
import QuestionCard from "./components/questionCard/QuestionCard";
import axios from "axios";
import { useEffect } from "react";
import QuestionList from "./components/questionList/QuestionList";
import { Routes, Route, Link } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Score from "./components/score/Score";

function App() {
  const [questionList, setQuestionList] = useState([]);
  const [shuffledList, setShuffledList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [lastScore, setLastScore] = useState();

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  const fetchApi = async () => {
    try {
      setIsLoading(true);
      const response = await (
        await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      ).json();

      let newShuffledList = [];

      let charactersToReplace = [
        ["&quot;", '"'],
        ["&#039;", "'"],
        ["&eacute;", "É"],
        ["&ldquo;", "“"],
        ["&rdquo;", "”"],
        ["&lt;", "<"],
        ["&gt;", ">"],
        ["&Uuml;", "Ü"],
      ];

      response.results.map((dt) => {
        charactersToReplace.map((c) => {
          dt.correct_answer = dt.correct_answer.replaceAll(c[0], c[1]);
          dt.incorrect_answers[0] = dt.incorrect_answers[0].replaceAll(
            c[0],
            c[1]
          );
          dt.incorrect_answers[1] = dt.incorrect_answers[1].replaceAll(
            c[0],
            c[1]
          );
          dt.incorrect_answers[2] = dt.incorrect_answers[2].replaceAll(
            c[0],
            c[1]
          );
          dt.question = dt.question.replaceAll(c[0], c[1]);
        });

        let arr = [...dt.incorrect_answers, dt.correct_answer];
        newShuffledList = [...newShuffledList, shuffleArray(arr)];
      });
      setShuffledList(newShuffledList);

      setQuestionList(response.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const handleScorePage = (lastScore, lastIndex) => {
    setLastScore(lastScore);

    if (questionList.length > 0) {
      setIsGameOver(lastIndex + 1 === questionList.length);
    }
    console.log(lastIndex, questionList.length);
    console.log(isGameOver);
  };

  const menuButtonClicked = () => {
    window.location.href = "http://localhost:5173/";
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route
          path="/quiz"
          element={
            isGameOver ? (
              <Score
                lastScore={lastScore}
                menuButtonClicked={menuButtonClicked}
              />
            ) : isLoading ? (
              <h1 className="loading-text">Loading...</h1>
            ) : (
              <QuestionCard
                questionList={questionList}
                shuffledList={shuffledList}
                handleScorePage={handleScorePage}
              />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
