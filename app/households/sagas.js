import { takeLatest } from 'redux-saga';
import { call, fork, put, select } from 'redux-saga/effects';
import {
  CREATED,
  UPDATED,
  restoredHouseholds,
  selectHousehold,
  revisionUpdated,
} from './state';

function* createHousehold(action) {
  const pouch = window.db;
  try {
    const result = yield call([pouch, pouch.put], action.payload);
    yield put(revisionUpdated(result));
  } catch (error) {
    console.error(error);
  }
}

function* updateHousehold(action) {
  try {
    const pouch = window.db;
    const { id } = action.payload;
    const { _rev } = yield select(selectHousehold, id);
    const updatedHousehold = { ...action.payload, _rev };

    const result = yield call([pouch, pouch.put], updatedHousehold);
    yield put(revisionUpdated(result));
  } catch (error) {
    console.error(error);
  }
}

function* watchCreates() {
  yield* takeLatest(CREATED, createHousehold);
}
function* watchUpdates() {
  yield* takeLatest(UPDATED, updateHousehold);
}

function* restoreFromDisk() {
  const pouch = window.db;
  const { rows } = yield call([pouch, pouch.allDocs], { include_docs: true });
  yield put(restoredHouseholds(rows.map((r) => r.doc)));
}

export default function* householdSaga() {
  yield fork(watchCreates);
  yield fork(watchUpdates);
  yield call(restoreFromDisk);
}
