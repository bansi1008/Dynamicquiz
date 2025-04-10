import Option from "./components/Option.js";
function Questions({ question, dispatch, answer, score }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} answer={answer} dispatch={dispatch} />
      <p>{score}</p>
    </div>
  );
}
export default Questions;
