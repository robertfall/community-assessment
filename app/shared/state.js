export const types = {
  DB_RESTORED: 'database/restored',
};

export const dbRestored = () => ({
  type: types.DB_RESTORED,
});

const defaultState = {
  loaded: false,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.DB_RESTORED:
      return {
        loaded: true,
      };
    default:
      return state;
  }
}
