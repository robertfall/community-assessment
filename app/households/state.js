const CREATE = 'households/create';

export const createHousehold = (data) => ({
  type: CREATE,
  payload: data
});

export function reducer(state, action) {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];

    default:
      return state;
  }
}
