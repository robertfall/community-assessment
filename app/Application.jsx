// react
import React, { PropTypes } from 'react';

// redux
import { Provider } from 'react-redux';

// routes
import { Router } from 'react-router';
import routes from 'routes';

const Application = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

Application.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Application;
