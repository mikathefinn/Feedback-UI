import React from 'react'

import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  // calc average rating
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = average.toFixed(1)

  return (
    <div className='feedback-stats'>
      <h4> {feedback.length} Reviews</h4>
      {/*isNan is a function to check if average is a NaN */}
      <h4> Average rating: {isNaN(average) ? 0 : average} </h4>
      FeedbackStats
    </div>
  )
}

export default FeedbackStats
