import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import households from 'households';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const { createdHousehold } = households.actions;

const App = ({ loaded, children, onCreateHousehold }) => (
  loaded
  ? <div>
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
  : <div>Loading...</div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  onCreateHousehold: PropTypes.func.isRequired,
  loaded: PropTypes.bool,
};

const selectDbLoaded = (state) => state.pouch.loaded;

export default connect(
  (state) => ({
    loaded: selectDbLoaded(state),
  }),
  (dispatch) => ({
    onCreateHousehold: () => {
      const householdAction = createdHousehold();
      dispatch(householdAction);
      dispatch(push(`/households/${householdAction.payload.id}`));
    },
  })
)(App);
