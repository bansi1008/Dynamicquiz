function Start({ questionCount, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the Quiz App</h2>
      <h3>{questionCount} number of questions</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Start;
