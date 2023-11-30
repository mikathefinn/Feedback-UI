import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  // from Context
  // editState is the FeedbackItem object. When clicked, shit happens so gotta import useEffect
  const { addFeedback, editState } = useContext(FeedbackContext)

  // whenever editState changes, useEffect will run.
  useEffect(() => {
    if (editState.edit === true) {
      setBtnDisabled(false)
      setText(editState.feedbackObj.text)
      setRating(editState.feedbackObj.rating)
     
    }
  }, [editState])

  const handleTextChange = (event) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // double check that text is 10 characters long
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      }
      addFeedback(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      {/*  */}
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* pass a function as a prop to the RatingSelect component, which sets rating with the value of selected radio button*/}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />

          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
