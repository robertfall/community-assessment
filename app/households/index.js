import reducer, { actions } from './state';
import * as components from './components';
import sagas from './sagas';
import replicationSagas from './replication-sagas';

export default {
  actions,
  reducer,
  components,
  sagas: [sagas, replicationSagas],
};
