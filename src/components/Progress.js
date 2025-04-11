function Progress({ index, score }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index}</strong>
      </p>
      <p>
        <strong>{score}</strong>
      </p>
    </header>
  );
}

export default Progress;
