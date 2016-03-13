import { reduxForm as connect } from 'redux-form';

import Form from '../components/Form';

const form = {
  form: 'communityAssessment',
  fields: [
    'address.address',
    'address.area',
    'address.directions',
    'careWorker.nameAndSurname',
    'careWorker.telephoneNumber'
  ]
};

export default connect(form)(Form);
