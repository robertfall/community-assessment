import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';


export default function configureStore(history, initialState) {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });

  const router = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(
    applyMiddleware(
      router,
      logger,
      sagaMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : noop => noop
  );
  const store = createStore(rootReducer, initialState, enhancer);
  store.sagaMiddleware = sagaMiddleware;

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  return store;
}
