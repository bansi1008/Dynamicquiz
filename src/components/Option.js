function Option({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          className={`btn btn-option 
            ${index === answer ? "answer" : ""} 
            ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
          onClick={() => dispatch({ type: "newanswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
export default Option;
