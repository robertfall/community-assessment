import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import households from 'households';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const { createdHousehold } = households.actions;

const App = ({ children, onCreateHousehold }) => (
  <div>
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">
            <Link to="/">
              Community Assessment
            </Link>
          </span>
        </div>
        <ul className="nav navbar-nav">
          <li><a onClick={onCreateHousehold}>New Household</a></li>
          <li><Link to="households">Existing Households</Link></li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
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
)(App);
