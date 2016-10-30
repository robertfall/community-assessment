export const types = {
  DB_RESTORED: 'database/restored',
  SYNC_CONFIG_UPDATED: 'database/config-updated',
  SYNC_STARTED: 'database/sync-started',
  SYNC_PAUSED: 'database/sync-paused',
};

export const selectLocalDb = state => state.pouch.localDb;
export const selectUrl = state => state.pouch.url;
export const selectSyncing = state =>  state.pouch.syncing;

export const dbRestored = () => ({
  type: types.DB_RESTORED,
});

export const syncStarted = () => ({
  type: types.SYNC_STARTED,
});

export const syncPaused = () => ({
  type: types.SYNC_PAUSED,
});

export const updatedSyncConfig = (url, localDb) => ({
  type: types.SYNC_CONFIG_UPDATED,
  payload: {
    url,
    localDb,
  },
});


const defaultState = {
  loaded: false,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.SYNC_CONFIG_UPDATED:
      return {
        ...state,
        url: action.payload.url,
        localDb: action.payload.localDb,
      };
    case types.DB_RESTORED:
      return {
        ...state,
        loaded: true,
      };
    case types.SYNC_PAUSED:
      return {
        ...state,
        syncing: false,
      };
    case types.SYNC_STARTED:
      return {
        ...state,
        syncing: true,
      };
    default:
      return state;
  }
}
