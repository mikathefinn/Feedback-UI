import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>;
  }
  //map through FeedbackData that is sent as props {feedback} from App and
  // use it to pass props to FeedbackItem
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} feedbackObj={item} />;
      })}
    </div>
  );
}
FeedbackList.propTypes = {
  feedback: PropTypes.array,
};
export default FeedbackList;
