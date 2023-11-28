import { useState } from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
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
  // function deleteFeedback is passed (through FeedbackList) to FeedbackItem as a prop
  // FeedbackList does not "use" it, it is just passing the info ('prop drilling')
  //in FeedbackItem, deleteFeedback gets it's parameter id from feedbackObj.id

  // pass FeedbackData as props to FeedbackList
  return (
    <>
      <Header />
      <div className="container">
      <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
