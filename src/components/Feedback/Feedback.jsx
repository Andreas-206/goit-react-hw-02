import Options from '../Options/Options'

const Feedback = ({feedbackTypes}) => {
  return (
    <div>
      <ul>
        {Object.keys(feedbackTypes).map((type) => (
          <li key={type}>
            {type}: {feedbackTypes[type]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feedback
