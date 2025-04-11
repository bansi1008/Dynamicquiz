function New({ dispatch }) {
  return (
    <div className="new">
      <button className="btn btn-ui" onClick={() => dispatch({ type: "" })}>
        New Quiz
      </button>
    </div>
  );
}

export default New;
