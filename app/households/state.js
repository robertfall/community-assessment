import UUID from 'uuid-js';
import _ from 'lodash';
import { DefaultValues } from './model';

export const CREATE = 'households/create';
export const UPDATE = 'households/update';

function emptyHousehold() {
  return {
    _id: UUID.create().hex,
    ...DefaultValues,
  };
}

const createHousehold = () => ({
  type: CREATE,
  payload: emptyHousehold(),
});

const updateHousehold = (household) => ({
  type: UPDATE,
  payload: household,
});

export const actions = { createHousehold, updateHousehold };

export default function reducer(state = [], action) {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((household) => {
        if (household.id === action.payload.id) {
          return Object.assign({}, household, action.payload);
        }
        return household;
      });

    default:
      return state;
  }
}

export function selectHousehold(state, id) {
  return _.find(state.households, { id });
}

export function selectPage(state, page, pageSize) {
  const indexedPage = page - 1;
  const households = state.households.slice(indexedPage * pageSize, page * pageSize);
  console.log(indexedPage);
  return households;
}
