import { fork, call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import PouchDB from 'pouchdb-browser';
import createChannel from 'helpers/create-channel';
import {
  selectLocalDb,
  selectUrl,
  syncStarted,
  syncPaused,
} from 'shared/state';
import {
  receivedHousehold,
  RESTORED,
} from './state';

function createChannelFor(event, replication) {
  const channel = createChannel();
  channel.eventName = event;
  replication.on(event, channel.put);
  return channel;
}

function* monitorInfoEvents(channel) {
  while (true) {
    const error = yield call(channel.take);
    if (channel.eventName === 'active') {
      yield put(syncStarted());
    } else if (error) {
      console.error(`Pouch Sync ${channel.eventName}. Error: `, error);
    } else if (channel.eventName === 'paused') {
      yield put(syncPaused());
    } else {
      console.info(`Pouch Sync ${channel.eventName}.`);
    }
  }
}

function* monitorErrorEvents(channel) {
  while (true) {
    const error = yield call(channel.take);
    console.error(`Pouch Sync ${channel.eventName}. `, error);
  }
}

function* monitorChangeEvents(channel) {
  while (true) {
    const event = yield call(channel.take);
    for (const record of event.change.docs) {
      if (!record._deleted) {
        yield put(receivedHousehold(record));
        console.log('Document Updated: ', record);
      }
    }
  }
}

function* startReplication() {
  const url = yield select(selectUrl);
  const localDb = yield select(selectLocalDb);
  const remoteDb = new PouchDB(url);

  const replication = localDb.sync(remoteDb, { live: true, retry: true });
  if (replication) {
    yield fork(monitorChangeEvents, createChannelFor('change', replication));
    yield fork(monitorErrorEvents, createChannelFor('error', replication));
    yield fork(monitorErrorEvents, createChannelFor('denied', replication));
    yield fork(monitorInfoEvents, createChannelFor('paused', replication));
    yield fork(monitorInfoEvents, createChannelFor('active', replication));
  }
}

export default function* replicationSaga() {
  yield takeEvery(RESTORED, startReplication);
}
