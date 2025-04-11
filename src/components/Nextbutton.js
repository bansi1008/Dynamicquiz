function Nextbutton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <div className="next-button">
      <button onClick={() => dispatch({ type: "next" })} className="btn btn-ui">
        Next Question
      </button>
    </div>
  );
}

export default Nextbutton;
