import { useState, useEffect } from 'react'
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options"
import './App.css'

function App() => {
const [feedbackTypes, setFeedbackTypes]  = useState({
	good: 0,
	neutral: 0,
	bad: 0
});

  return (
    <>
    <Description />
    <Feedback />
    <Options />
    </>
  )
}

export default function App;
