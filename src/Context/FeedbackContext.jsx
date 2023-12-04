import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [editState, setEditState] = useState({ item: {}, edit: false })

  useEffect(() => {
    fetchFeedback()
  }, [])

  //FUNCTIONS

  // FETCH DATA

  const fetchFeedback = async () => {
    // sort by id, descending order
    const response = await fetch(
      'http://localhost:5000/feedback?_sort=id&_order=desc',
      {}
    )

    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

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
        item.id === id ? { ...item, ...updatedItem } : item
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
        isLoading,
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
