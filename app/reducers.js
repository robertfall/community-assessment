import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { reducer as households } from 'households';

const rootReducer = combineReducers({
  form,
  routing,
  households
});

export default rootReducer;
