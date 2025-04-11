import "./App.css";
import Header from "./Header";
import "./index.css";
import Main from "./Main";
import { useEffect, useReducer } from "react";
import Loader from "./Loader";
import Error from "./Error";
import Start from "./Start";
import Question from "./Question";
import Nextbutton from "./components/Nextbutton";
import Progress from "./components/Progress";
import Finish from "./components/Finish";
import New from "./components/New";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "datarec":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "datafailed":
      return {
        ...state,
        status: "error",
      };
    case "active":
      return {
        ...state,
        status: "active",
      };
    case "newanswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        score:
          action.payload === question.correctOption
            ? state.score + question.points
            : state.score,
      };
    case "next":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finshed",
      };

    default:
      throw new Error("Unknown action type");
  }
}

function App() {
  const [{ questions, status, index, answer, score }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const questionCount = questions.length;
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "datarec", payload: data }))

      .catch((error) => dispatch({ type: "datafailed" }));
  }, []);
  const numQuestions = questions.length;

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Start questionCount={questionCount} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress index={index + 1} score={score} />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
          </>
        )}
        <Nextbutton
          dispatch={dispatch}
          answer={answer}
          index={index}
          numQuestions={numQuestions}
        />
        {status === "finshed" && <Finish score={score} />}
      </Main>
    </div>
  );
}

export default App;
