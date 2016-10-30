import { sagas as householdSagas } from 'households';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield householdSagas.map(fork);
}
