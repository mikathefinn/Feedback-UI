import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from './shared/Card';

function FeedbackItem({ feedbackObj }) {
  // Card component receives two divs as props {chidlren}
  //feedbackObj is being mapped and each iteration creates a new feedback item

  return (
    <Card reverse={false}>
      <div className="num-display">{feedbackObj.rating}</div>
      <div className="text-display">{feedbackObj.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedbackObj: PropTypes.object.isRequired,
};

export default FeedbackItem;
