import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Application from 'Application';
import setupPouch from 'helpers/pouch';
import rootSaga from './saga';
import './app.global.css';

const store = configureStore(hashHistory);
window.db = setupPouch();

store.sagaMiddleware.run(rootSaga);

const history = syncHistoryWithStore(hashHistory, store);
render(
  <Application store={store} history={history} />,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept('Application', () => {
    const NextApplication = require('Application');
    render(
      <NextApplication store={store} history={history} />,
      document.getElementById('root')
    );
  });
}

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  // require('./createDevToolsWindow')(store);
}
