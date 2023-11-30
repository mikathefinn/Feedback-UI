import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
    {
      id: 2,
      text: 'This item is from context so fuck you.',
      rating: 7,
    },
    {
      id: 3,
      text: "This item is from context so why don't you fuck off?",
      rating: 8,
    },
  ])

  // item is the item being edited
  const [editState, setEditState] = useState({ feedbakcObj: {}, edit: false })


  //FUNCTIONS

  const deleteFeedback = (id) => {
    console.log(id)
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(
        feedback.filter((feedbackItem) => {
          return feedbackItem.id !== id
        })
      )
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    //add newFeedback to feedback array, with the rest of the "old" array
    setFeedback([newFeedback, ...feedback])
  }

  // edit Feedback Item by setting the object in editState as the feedbackObj from Feedback Item (that has been clicked)
  // also set edit: true
  const editFeedback = (feedbackObj) => {
    setEditState({ feedbackObj, edit: true })
  }

  // anything that is passed to the value can be used in components via useContext
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        editState,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackContext
