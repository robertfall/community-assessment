import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Summary = ({ household, href }) => (
  <div>
    <Link to={href}>
      {household.id.slice(0, 8)}
    </Link>
  </div>
);

Summary.propTypes = {
  household: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired
};

export default Summary;
