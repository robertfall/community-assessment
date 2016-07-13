import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { CREATE, UPDATE } from './state';

function* persistHousehold(action) {
  const pouch = window.db;
  const result = yield call([pouch, pouch.put], action.payload);
}

function* watchHouseholds() {
  yield* takeLatest(CREATE, persistHousehold);
  yield* takeLatest(UPDATE, persistHousehold);
}

export default [watchHouseholds];
