const Options = ({ onLeaveFeedback, totalFeedback }) => {
  const handleReset = () => {
    localStorage.removeItem("feedbackTypes");
    window.location.reload();
  };

	return (
		<div>
			<button onClick={() => onLeaveFeedback('good')}>Good</button>
			<button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
			<button onClick={() => onLeaveFeedback('bad')}>Bad</button>
			{totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
		</div>
	)
}

export default Options
