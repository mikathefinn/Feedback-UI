import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
  ]);

  const deleteFeedback = (id) => {
    console.log(id);
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(
        feedback.filter((feedbackItem) => {
          return feedbackItem.id !== id;
        })
      );
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //add newFeedback to feedback array
    setFeedback([newFeedback, ...feedback]);
  };

  // anything that is passed to the value can be used in components via useContext
  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
