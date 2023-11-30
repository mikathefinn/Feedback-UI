
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackList() {
  const {feedback}= useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>;
  }
  //map through FeedbackData that is sent as props {feedback} from App and
  // use it to pass props to FeedbackItem
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                feedbackObj={item}
                
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
