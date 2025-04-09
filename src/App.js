import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import "./index.css";
import Main from "./Main";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  status: "loading",
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
    default:
      throw new Error("Unknown action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "datarec", payload: data }))

      .catch((error) => dispatch({ type: "datafailed" }));
  }, []);

  return (
    <div className="App">
      <Header />
      <Main className="main"></Main>
    </div>
  );
}

export default App;
