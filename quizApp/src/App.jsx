import { useState } from "react";
import "./App.css";
import QuestionCard from "./components/questionCard/QuestionCard";
import axios from "axios";
import { useEffect } from "react";
import QuestionList from "./components/questionList/QuestionList";

function App() {
  const [questionList, setQuestionList] = useState([]);
  const fetchApi = async () => {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
    );
    console.log(response.data.results);
    setQuestionList(response.data.results);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <QuestionCard questionList={questionList} />
      <QuestionList />;
    </>
  );
}

export default App;
