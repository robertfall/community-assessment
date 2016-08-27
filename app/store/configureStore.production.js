import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore(initialState) {
  const routerMiddleware = createRouterMiddleware(hashHistory);
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = applyMiddleware(
    routerMiddleware,
    sagaMiddleware,
    loggerMiddleware,
  );
  const store = createStore(rootReducer, initialState, enhancer);
  store.sagaMiddleware = sagaMiddleware;
  return store;
}
