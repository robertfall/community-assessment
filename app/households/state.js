import UUID from 'uuid';
import _ from 'lodash';
import { DefaultValues } from './model';

export const CREATED = 'households/created';
export const UPDATED = 'households/updated';
export const RESTORED = 'households/restored';
export const REVISION_UPDATED = 'households/revision-updated';

function emptyHousehold() {
  const id = UUID.v4().toString();
  return {
    _id: id,
    id,
    ...DefaultValues,
  };
}

const createdHousehold = () => ({
  type: CREATED,
  payload: emptyHousehold(),
});

const updatedHousehold = (household) => ({
  type: UPDATED,
  payload: household,
});

export const restoredHouseholds = (households) => ({
  type: RESTORED,
  payload: households,
});

export const revisionUpdated = ({ id, _rev }) => ({
  type: REVISION_UPDATED,
  payload: { id, _rev },
});

export const actions = { createdHousehold, updatedHousehold, revisionUpdated };

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
