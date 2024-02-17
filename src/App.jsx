import { useState, useEffect } from 'react'
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options"
import Notification from './components/Notification/Notification'
import './App.css'

const App = () => {

const [feedbackTypes, setFeedbackTypes]  = useState({
	good: 0,
	neutral: 0,
	bad: 0
});

  const updateFeedback = feedbackType => {
    setFeedbackTypes((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;


  return (
    <>
    <Description />
    {totalFeedback > 0 ? (<Feedback feedbackTypes={feedbackTypes} />) : (<Notification message="No feedback yet")}  
    <Options onLeaveFeedback={updateFeedback} />
    </>
  )
}

export default App;
