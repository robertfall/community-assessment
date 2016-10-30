import { call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { SYNC_UPDATED } from
import PouchDB from 'pouchdb-browser';
import createChannel from 'helpers/create-channel';

function createChannelFor(event, replication) {
  const channel = createChannel();
  replication.on(event, (x) => {
    console.log('Event Caught: ', event);
    channel.put(x);
  });
  return channel;
}

function* monitorInfoEvents(channel) {
  while (true) {
    const info = yield call(channel.take);
    console.log('Info event recieved: ', info);
  }
}

function* startReplication(action) {
  const { url, localDb } = action.payload;
  const remoteDb = new PouchDB(url);

  const replication = localDb.sync(remoteDb, { live: true, retry: true });
  if (replication) {
    /* yield (monitorChangeEvents, createChannelFor('change'));
     * yield (monitorErrorEvents, createChannelFor('error'));
     * yield (monitorErrorEvents, createChannelFor('denied'));*/
    yield call(monitorInfoEvents, createChannelFor('paused', replication));
    yield call(monitorInfoEvents, createChannelFor('active', replication));
  }
  /* .on('change', ({ change }) => {
   *   console.log('Change Received: ', change);
   * })
   * .on('paused', (error) => {
   *   if (error) { console.log('DB Sync Error: ', error); return; }
   *   console.log('DB Sync Up To Date');
   * })
   * .on('active', () => {
   *   console.log('DB Sync Resumed');
   * })
   * .on('error', err => {
   *   console.error('DB Sync Error Encountered:', err);
   * })
   * .on('denied', (err) => {
   *   console.error('DB Permissions Error: ', err);
   * });*/
}

export default function* replicationSaga() {
  yield takeEvery(SYNC_UPDATED, startReplication, action);
}
