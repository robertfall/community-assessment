import PouchDB from 'pouchdb-browser';

export default function setupPouch() {
  const localDb = new PouchDB('households');
  return localDb;
}
