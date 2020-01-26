import React from 'react'
import { useSelector } from 'react-redux'

export const Score = () => {
  const score = useSelector((state) => state.quiz.answers.isCorrect)

  return (
    <>
      <div>{score}</div>
    </>
  )
}