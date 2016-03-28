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

    'deaths.deaths[].surname',
    'deaths.deaths[].name',
    'deaths.deaths[].gender',
    'deaths.deaths[].age',
    'deaths.deaths[].causeOfDeath',
    'deaths.deaths[].comments',

    'environmentAndHealth.environmentalHazards[]',
    'environmentAndHealth.healthInformation[]',
    'environmentAndHealth.lifeImprovements[]',
    'environmentAndHealth.peopleWhoWouldAppreciateVCT',
  ]
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (account) => {
    },
  };
}

export default connect(form, mapDispatchToProps)(Form);
