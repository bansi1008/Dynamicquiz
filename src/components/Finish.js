function Finish({ score }) {
  return (
    <div className="finish">
      <h2>Quiz Finished!</h2>
      <p>Thank you for participating!</p>
      <p>
        Your score is: <strong>{score}</strong>
      </p>
      <p>We hope you enjoyed the quiz!</p>
      <p>See you next time!</p>
    </div>
  );
}

export default Finish;
