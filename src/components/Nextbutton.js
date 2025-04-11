function Nextbutton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <div className="next-button">
        <button
          onClick={() => dispatch({ type: "next" })}
          className="btn btn-ui"
        >
          Next Question
        </button>
      </div>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <div className="next-button">
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="btn btn-ui"
        >
          Finish
        </button>
      </div>
    );
  }
}

export default Nextbutton;
