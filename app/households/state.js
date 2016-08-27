import UUID from 'uuid';
import _ from 'lodash';
import { DefaultValues } from './model';

export const CREATED = 'households/created';
export const UPDATED = 'households/updated';
export const RESTORED = 'households/restored';
export const OPENED = 'households/opened';
export const REVISION_UPDATED = 'households/revision-updated';

function emptyHousehold(id = UUID.v4().toString()) {
  const now = new Date();
  return {
    _id: id,
    createdAt: now,
    updatedAt: now,
    id,
    ...DefaultValues,
  };
}

export const createdHousehold = (id) => ({
  type: CREATED,
  payload: emptyHousehold(id),
});

const updatedHousehold = (household) => {
  const now = new Date();
  return {
    type: UPDATED,
    payload: {
      ...household,
      updatedAt: now,
    },
  };
};

const openedHousehold = (id) => ({
  type: OPENED,
  payload: id,
});

export const restoredHouseholds = (households) => ({
  type: RESTORED,
  payload: households,
});

export const revisionUpdated = ({ id, rev }) => ({
  type: REVISION_UPDATED,
  payload: { id, _rev: rev },
});

export const actions = {
  createdHousehold,
  updatedHousehold,
  revisionUpdated,
  openedHousehold,
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case CREATED:
      return [...state, action.payload];
    case UPDATED:
      return state.map((household) => {
        if (household.id === action.payload.id) {
          return Object.assign({}, household, action.payload);
        }
        return household;
      });
    case RESTORED:
      return action.payload;
    case REVISION_UPDATED:
      return state.map((household) => {
        if (household.id === action.payload.id) {
          const { _rev } = action.payload;
          return Object.assign({}, household, { _rev });
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
  return households;
}
