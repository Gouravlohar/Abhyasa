import React, {useState} from "react";
import Main from "./Child_Examportal/Main/Main";
import Quiz from "./Child_Examportal/Quiz/Quiz";
import End from "./Child_Examportal/End/End";
import { QuizContext } from "./Child_Examportal/Helpers/Contexts";
import "../Styles/examportal.css";



import ExamNavbar from "./ExamNavbar";

const App = () => {

  {/* States */}
  const [counter, setCounter] = useState(240);
  const [questions, setQuestions] = useState();
  const [gameState, setGameState] = useState("main");
  const [score, setScore] = useState(0);

  {/* When we change gameState - render different component */}
  return (
    <>
    <ExamNavbar/>
    <div className="App" id="app">
    <QuizContext.Provider value={{gameState, setGameState, score, setScore, questions, setQuestions, counter, setCounter}}>
      {gameState === "main" && <Main/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "end" && <End/>}
    </QuizContext.Provider>
  </div>
  </>


  )
  
  
}

export default App;