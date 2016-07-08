import AddressInputs from './components/AddressInputs';
import CareWorkerInputs from './components/CareWorkerInputs';
import HeadOfHouseholdInputs from './components/HeadOfHouseholdInputs';
import HouseInputs from './components/HouseInputs';
import SanitationAndWaterInputs from './components/SanitationAndWaterInputs';
import NutritionInputs from './components/NutritionInputs';
import ChildrenInputs from './components/ChildrenInputs';
import DeathsInputs from './components/DeathsInputs';
import EnvironmentAndHealthInputs from './components/EnvironmentAndHealthInputs';
import OccupantsInputs from './components/OccupantsInputs';

export const DefaultValues = {
  children: {
    // using children causes issues with react
    childs: [{}]
  },
  deaths: {
    deaths: [{}]
  },
  environmentAndHealth: {
    environmentalHazards: [''],
    healthInformation: [''],
    lifeImprovements: [''],
  },
  occupants: {
    occupants: [{}],
  }
};

export const FormSections = [
  {
    key: 'address',
    name: 'Address',
    component: AddressInputs
  }, {
    key: 'careWorker',
    name: 'Care Worker',
    component: CareWorkerInputs
  }, {
    key: 'headOfHousehold',
    name: 'Head of Household',
    component: HeadOfHouseholdInputs
  }, {
    key: 'house',
    name: 'House',
    component: HouseInputs
  }, {
    key: 'sanitationAndWater',
    name: 'Sanitation and Water',
    component: SanitationAndWaterInputs
  }, {
    key: 'nutrition',
    name: 'Nutrition',
    component: NutritionInputs
  }, {
    key: 'children',
    name: 'Children',
    component: ChildrenInputs
  }, {
    key: 'deaths',
    name: 'Deaths',
    component: DeathsInputs
  }, {
    key: 'environmentAndHealth',
    name: 'Environment and Health',
    component: EnvironmentAndHealthInputs
  }, {
    key: 'occupants',
    name: 'Occupants',
    component: OccupantsInputs
  },
];
