import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { FormSections } from '../model';
import FormNavigationButtons from './FormNavigationButtons';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import lifecycle from 'shared/components/lifecycle';

import { actions, selectHousehold } from '../state';
const { updatedHousehold, openedHousehold } = actions;

function renderProgress(currentStep) {
  return (
    <div className="form-progress">
      <ul className="nav nav-wizard">
        {
          FormSections.map((section, index) => (
            <li
              key={index + 1}
              className={currentStep === index + 1 ? 'active' : ''}
            >
              <Link to={{ pathname: '/households/new', query: { step: index + 1 } }}>
                {section.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const Form = (props) => {
  const { currentStep, numberOfSteps, handleSubmit } = props;
  const section = FormSections[currentStep - 1];
  const FormSection = section.component;
  return (
    <div className="flex-container">
      {renderProgress(currentStep)}
      <form
        className="form-horizontal"
        id="userInputForm"
        onSubmit={handleSubmit}
      >
        {FormSection && <FormSection />}
        <FormNavigationButtons
          currentStep={currentStep}
          numberOfSteps={numberOfSteps}
        />
      </form>
    </div>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  numberOfSteps: PropTypes.number.isRequired,
};


function stepFromQuery(query) {
  return query.step ? Number.parseInt(query.step, 10) : 1;
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: selectHousehold(state, ownProps.params.id),
    currentStep: stepFromQuery(ownProps.location.query),
    numberOfSteps: FormSections.length,
  };
}

function mapDispatchToProps(dispatch, { params }) {
  return {
    onSubmit(data) {
      dispatch(updatedHousehold(data));
      dispatch(push('/'));
    },
    componentWillMount() {
      dispatch(openedHousehold(params.id));
    },
  };
}

const form = {
  form: 'communityAssessment',
};

const LifecycleForm = lifecycle(Form);
const ReduxForm = reduxForm(form)(LifecycleForm);
export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
