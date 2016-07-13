/* eslint-disable no-console */
import PouchDB from 'pouchdb';

export default function setupPouch() {
  const localDb = new PouchDB('households');

  // dispatch(startLoading());
  return localDb;
}
