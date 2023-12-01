import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'It has been months and I still feel the pain',
      rating: 10,
    },
    {
      id: 2,
      text: "I've been kicked harder but still worth the money.",
      rating: 7,
    },
    {
      id: 3,
      text: "Timothy know's what he's doing, a great experience for the whole family.",
      rating: 9,
    },
  ])

  const [editState, setEditState] = useState({ item: {}, edit: false })

  //FUNCTIONS

  // DELETE FEEDBACK
  const deleteFeedback = (id) => {
    
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(
        feedback.filter((feedbackItem) => {
          return feedbackItem.id !== id
        })
      )
    }
  }

  // ADD FEEDBACK
  //newFeedback from FeedbackItem
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    //add newFeedback to feedback array, with the rest of the "old" array
    setFeedback([newFeedback, ...feedback])
  }

  // UPDATE FEEDBACK
  // id of the item clicked, updated text
  const updateFeedback = (id, updatedItem) => {
      
    setFeedback(
        //if the item.id matches the id of the object being edited, new array is returned where 
        //updatedItem will override any of the same values in item-object. 
      feedback.map((item) =>
        (item.id === id ? { ...item, ...updatedItem } : item)
      )
    )
  }

  //EDIT FEEDBACK
  const editFeedback = (feedbackObj) => {
    // edit Feedback Item by setting the object in editState as the feedbackObj from Feedback Item (that has been clicked)
    // also set edit: true
    setEditState({ feedbackObj, edit: true })
    
  }
  
  // anything that is passed to the value can be used in components via useContext
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        updateFeedback,
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
