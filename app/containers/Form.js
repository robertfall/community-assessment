import { reduxForm as connect } from 'redux-form';
import FormFields, { DefaultValues } from '../form-model';

import Form from '../components/Form';

function stepFromQuery(query) {
  return query.step ? query.step : 0;
}

const form = {
  form: 'communityAssessment',
  fields: FormFields,
};

function mapStateToProps(state, ownProps) {
  const initialValues = DefaultValues;
  return {
    initialValues,
    step: stepFromQuery(ownProps.location.query)
  };
}

export default connect(form, mapStateToProps)(Form);
