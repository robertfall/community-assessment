import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormSections, DefaultValues } from '../form-model';

import Form from '../components/Form';

function stepFromQuery(query) {
  return query.step ? Number.parseInt(query.step, 10) : 0;
}

function mapStateToProps(state, ownProps) {
  const initialValues = DefaultValues;
  return {
    initialValues,
    currentStep: stepFromQuery(ownProps.location.query),
    numberOfSteps: FormSections.length,
  };
}

const FormedForm = reduxForm({ form: 'communityAssessment' })(Form);

export default connect(mapStateToProps)(FormedForm);
