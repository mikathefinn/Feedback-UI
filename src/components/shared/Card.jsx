import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  // if reverse is true, then className is 'card reverse'
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

// now anything can be displayed like card, just wrap it in <Card></Card>

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
