import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const RestartButton = () => {
  const dispatch = useDispatch()
  const quizEnd = useSelector((state) => state.quiz.quizOver)
  const score = useSelector((state) => state.quiz.score)

  return (
    <>
      {quizEnd && (
        <div className="result-page">
          <h1>YOUR RESULT: {score} / 5</h1>
          <button type="button" onClick={() => dispatch(quiz.actions.restart())}>
            Do it again!
          </button>
        </div>)
      }
    </>
  )
}