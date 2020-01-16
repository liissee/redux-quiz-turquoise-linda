import React from 'react'
import { useSelector } from 'react-redux'
import './ProgressBar.css';

const Range = (props) => {
  return (
    <div className="range" style={{ width: `${props.percentRange}%` }} />
  )
};

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Range percentRange={props.percentRange} />
    </div>
  )
};


export const ProgressBarContainer = () => {
  const questions = useSelector((store) => store.quiz.questions.length)
  const currentQuestion = useSelector((store) => store.quiz.currentQuestionIndex + 1)
  const percentRange = useSelector((store) => store.quiz.progressPercentage)

  return (
    <div className="progress-container">
      <ProgressBar percentRange={percentRange} />
      Question: {currentQuestion} / {questions}
    </div >
  )
}