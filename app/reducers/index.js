import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form,
  routing
});

export default rootReducer;
