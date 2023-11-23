import {FaNapster, FaPenFancy, FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types';
import Card from './shared/Card';

//feedbackObj is a prop from FeedbackList, 
function FeedbackItem({ feedbackObj, handleDelete }) {
  
  
  // Card component receives two divs as props {chidlren}
  return (
    <Card reverse={false}>
      <div className="num-display">{feedbackObj.rating}</div>
      <button onClick={()=> handleDelete(feedbackObj.id)} className="close"><FaTimes color='purple' />
      </button>
      <div className="text-display">{feedbackObj.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedbackObj: PropTypes.object.isRequired,
};

export default FeedbackItem;
