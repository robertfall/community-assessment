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
  ]
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (account) => {
      debugger;
    },
  };
}

export default connect(form, mapDispatchToProps)(Form);
