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
      'http://localhost:5000/feedback?_sort=id&_order=desc'
    )

    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // ADD FEEDBACK
  //newFeedback from FeedbackItem
  const addFeedback = async (newFeedback) => {
    const response = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
    })
    const data = await response.json()
    console.log(data)
    //add newFeedback to feedback array, with the rest of the "old" array
    setFeedback([data, ...feedback])
  }

  // DELETE FEEDBACK
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE' })

      setFeedback(
        feedback.filter((feedbackItem) => {
          return feedbackItem.id !== id
        })
      )
    }
  }

  // UPDATE FEEDBACK
  // id of the item clicked, updated text
  const updateFeedback =async (id, updatedItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`,{
      method: 'PUT',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(updatedItem)
    })
    const data = await response.json()

    setFeedback(
      //if the item.id matches the id of the object being edited, new array is returned where
      //data(=updated Item) will override any of the same values in item-object.
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : item
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
