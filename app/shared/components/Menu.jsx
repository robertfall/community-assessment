import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import households from 'households';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const { createdHousehold } = households.actions;

const Menu = ({ onCreateHousehold }) => (
  <div className="text-center">
    <h3>Community Assessment Data Capturing</h3>
    <br />
    <button
      className="btn btn-primary btn-lg"
      onClick={onCreateHousehold}
    >New Household Form</button>
    <br />
    <br />
    <Link className="btn btn-primary btn-lg" to="households">Existing Households</Link>
  </div>
);

Menu.propTypes = {
  onCreateHousehold: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  (dispatch) => ({
    onCreateHousehold: () => {
      const householdAction = createdHousehold();
      dispatch(householdAction);
      dispatch(push(`/households/${householdAction.payload.id}`));
    },
  })
)(Menu);
