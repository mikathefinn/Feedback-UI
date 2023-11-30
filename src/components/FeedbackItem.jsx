import {FaTimes,FaEdit} from 'react-icons/fa'
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from '../Context/FeedbackContext';

//feedbackObj is a prop from FeedbackList, 
function FeedbackItem({ feedbackObj }) {

  const {deleteFeedback, editFeedback}= useContext(FeedbackContext)

  // Card component receives two divs as props {chidlren}
  return (
    <Card reverse={false}>
      <div className="num-display">{feedbackObj.rating}</div>
      <button onClick={()=> deleteFeedback(feedbackObj.id)} className="close"><FaTimes color='purple' />
      </button>
      <button className='edit' onClick={()=>editFeedback(feedbackObj)}><FaEdit color='purple'/></button>
      <div className="text-display">{feedbackObj.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedbackObj: PropTypes.object.isRequired,
};

export default FeedbackItem;
