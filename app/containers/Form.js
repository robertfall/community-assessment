import { reduxForm as connect } from 'redux-form';

import Form from '../components/Form';

const form = {
  form: 'communityAssessment',
  fields: [
    'address.address',
    'address.area',
    'address.directions',

    'careWorker.nameAndSurname',
    'careWorker.telephoneNumber',

    'headOfHousehold.name',
    'headOfHousehold.surname',
    'headOfHousehold.gender',
    'headOfHousehold.maritalStatus',
    'headOfHousehold.dateOfBirth',
    'headOfHousehold.occupation',
    'headOfHousehold.age',
    'headOfHousehold.foreignNational',
    'headOfHousehold.comment',

    'house.wallsMadeOf',
    'house.wallsCondition',
    'house.wallsConditionComments',
    'house.roofMadeOf',
    'house.roofCondition',
    'house.roofConditionComments',
    'house.comments',

    'sanitationAndWater.sourceOfWater',
    'sanitationAndWater.toilet',
    'sanitationAndWater.waterPurificationMeasures',

    'nutrition.food',
    'nutrition.foodComments',
    'nutrition.cookingEnergy',
    'nutrition.cookingComments',
    'nutrition.heatingEnergy',
    'nutrition.heatingComments',
    'nutrition.lightingEnergy',
    'nutrition.lightingComments',

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

    'deaths[].surname',
    'deaths[].name',
    'deaths[].gender',
    'deaths[].age',
    'deaths[].causeOfDeath',
    'deaths[].comments',

    'environmentAndHealth.environmentalHazards[]',
    'environmentAndHealth.healthInformation[]',
    'environmentAndHealth.lifeImprovements[]',
    'environmentAndHealth.peopleWhoWouldAppreciateVCT',

    'occupants[].surname',
    'occupants[].name',
    'occupants[].gender',
    'occupants[].relationHeadOfHoushold',
    'occupants[].age',
    'occupants[].atHomeDuringDay',
    'occupants[].mobility',
    'occupants[].selfCare',
    'occupants[].usualActivity',
    'occupants[].painOrDiscomfort',
    'occupants[].anxietyOrDepression',
    'occupants[].chronicRespiratoryProblems',
    'occupants[].hypertension',
    'occupants[].epilepsy',
    'occupants[].diabetes',
    'occupants[].chronicMedication',
    'occupants[].tbMedication',
    'occupants[].currentCoughing',
    'occupants[].currentNightSweats',
    'occupants[].recentWeightLoss',
    'occupants[].diarrhoea',
    'occupants[].chronicWound',
    'occupants[].disability',
    'occupants[].problemsWithVision',
    'occupants[].comments',
  ]
};

function mapStateToProps() {
  const initialValues = {
    children: { children: [{}] },
    deaths: [{}],
    environmentAndHealth: {
      environmentalHazards: [''],
      healthInformation: [''],
      lifeImprovements: [''],
    },
    occupants: [{}],
  };
  return { initialValues };
}

export default connect(form, mapStateToProps)(Form);
