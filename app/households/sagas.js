import { call, take, fork, put, select } from 'redux-saga/effects';

import { dbRestored } from 'shared/state';
import {
  CREATED,
  UPDATED,
  OPENED,
  restoredHouseholds,
  createdHousehold,
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

function* createIfNecessary({ payload }) {
  const existingHousehold = yield select(selectHousehold, payload);
  if (!existingHousehold) {
    yield put(createdHousehold(payload));
  }
}

function* restoreFromDisk() {
  const pouch = window.db;
  const { rows } = yield call([pouch, pouch.allDocs], { include_docs: true });
  yield put(restoredHouseholds(rows.map(r => r.doc)));
  yield put(dbRestored());
}


export default function* householdSaga() {
  yield fork(restoreFromDisk);
  while (true) {
    const action = yield take();
    switch (action.type) {
      case CREATED:
        yield fork(createHousehold, action);
        break;
      case UPDATED:
        yield fork(updateHousehold, action);
        break;
      case OPENED:
        yield fork(createIfNecessary, action);
        break;
      default:
        break;
    }
  }
}
