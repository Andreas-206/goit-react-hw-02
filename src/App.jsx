import { useState, useEffect } from 'react'
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options"
import Notification from './components/Notification/Notification'
import './App.css'

const App = ({}) => {
  const initialState = JSON.parse(localStorage.getItem("feedbackTypes")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackTypes, setFeedbackTypes] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("feedbackTypes", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = feedbackType => {
    setFeedbackTypes((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positivePercentage = totalFeedback > 0 ? Math.round(((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100) : 0;


   return (
    <>
      <Description />
      <Options onLeaveFeedback={updateFeedback} totalFeedback={totalFeedback} />
      <Notification />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        null 
      )}
    </>
  )
}



export default App;
