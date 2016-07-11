import { takeLatest, put, call } from 'redux-saga';
import { CREATE, UPDATE } from './state';

function* persistHousehold(action) {
  console.log('Writing to pouch');
  console.log(action);
}

function* watchHouseholds() {
  yield* takeLatest(CREATE, persistHousehold);
  yield* takeLatest(UPDATE, persistHousehold);
}

export default [watchHouseholds];
