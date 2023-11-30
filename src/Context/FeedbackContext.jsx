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
  const [feedbackEdit, setFeedbackEdit] =useState({feedbakcObj:{}, edit: false}) 

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
// set FeedbackItem edit
  const editFeedback = (feedbackObj) =>{
    setFeedbackEdit({feedbackObj, edit:true})

  }

  // anything that is passed to the value can be used in components via useContext
  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackContext
