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
  children: { children: [{}] },
  deaths: [{}],
  environmentAndHealth: {
    environmentalHazards: [''],
    healthInformation: [''],
    lifeImprovements: [''],
  },
  occupants: [{}],
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

export const AddressFields = [
  'address.address',
  'address.area',
  'address.directions',
];

export const CareWorkerFields = [
  'careWorker.nameAndSurname',
  'careWorker.telephoneNumber',
];

export const HeadOfHouseholdFields = [
  'headOfHousehold.name',
  'headOfHousehold.surname',
  'headOfHousehold.gender',
  'headOfHousehold.maritalStatus',
  'headOfHousehold.dateOfBirth',
  'headOfHousehold.occupation',
  'headOfHousehold.age',
  'headOfHousehold.foreignNational',
  'headOfHousehold.comment',
];

export const HouseFields = [
  'house.wallsMadeOf',
  'house.wallsCondition',
  'house.wallsConditionComments',
  'house.roofMadeOf',
  'house.roofCondition',
  'house.roofConditionComments',
  'house.comments',
];

export const SanitationAndWaterFields = [
  'sanitationAndWater.sourceOfWater',
  'sanitationAndWater.toilet',
  'sanitationAndWater.waterPurificationMeasures',
];

export const NutritionFields = [
  'nutrition.food',
  'nutrition.foodComments',
  'nutrition.cookingEnergy',
  'nutrition.cookingComments',
  'nutrition.heatingEnergy',
  'nutrition.heatingComments',
  'nutrition.lightingEnergy',
  'nutrition.lightingComments',
];

export const ChildrenFields = [
  'children.children[].surname',
  'children.children[].name',
  'children.children[].gender',
  'children.children[].dateOfBirth',
  'children.children[].age',
  'children.children[].timeBreastfed',
  'children.children[].timeBottlefed',
  'children.children[].ageWeaned',
  'children.children[].immunization',
  'children.diarrhoeaMixture',
  'children.diarrhoeaMixtureRecipe',
];

export const DeathFields = [
  'deaths.deaths[].surname',
  'deaths.deaths[].name',
  'deaths.deaths[].gender',
  'deaths.deaths[].age',
  'deaths.deaths[].causeOfDeath',
  'deaths.deaths[].comments',
];

export const EnvironmentAndHealthFields = [
  'environmentAndHealth.environmentalHazards[]',
  'environmentAndHealth.healthInformation[]',
  'environmentAndHealth.lifeImprovements[]',
  'environmentAndHealth.peopleWhoWouldAppreciateVCT',
];

export const OccupantsFields = [
  'occupants.occupants[].surname',
  'occupants.occupants[].name',
  'occupants.occupants[].gender',
  'occupants.occupants[].relationHeadOfHoushold',
  'occupants.occupants[].age',
  'occupants.occupants[].atHomeDuringDay',
  'occupants.occupants[].mobility',
  'occupants.occupants[].selfCare',
  'occupants.occupants[].usualActivity',
  'occupants.occupants[].painOrDiscomfort',
  'occupants.occupants[].anxietyOrDepression',
  'occupants.occupants[].chronicRespiratoryProblems',
  'occupants.occupants[].hypertension',
  'occupants.occupants[].epilepsy',
  'occupants.occupants[].diabetes',
  'occupants.occupants[].chronicMedication',
  'occupants.occupants[].tbMedication',
  'occupants.occupants[].currentCoughing',
  'occupants.occupants[].currentNightSweats',
  'occupants.occupants[].recentWeightLoss',
  'occupants.occupants[].diarrhoea',
  'occupants.occupants[].chronicWound',
  'occupants.occupants[].disability',
  'occupants.occupants[].problemsWithVision',
  'occupants.occupants[].comments',
];

export default [
  ...AddressFields,
  ...CareWorkerFields,
  ...HeadOfHouseholdFields,
  ...HouseFields,
  ...SanitationAndWaterFields,
  ...NutritionFields,
  ...ChildrenFields,
  ...DeathFields,
  ...EnvironmentAndHealthFields,
  ...OccupantsFields,
];
