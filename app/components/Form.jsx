import React, { Component, PropTypes } from 'react';
import { FormSections } from '../form-model';
import FormNavigationButtons from './FormNavigationButtons';
import { Link } from 'react-router';

function renderProgress(currentStep) {
  return (
    <div className="text-center">
      <ul className="nav nav-wizard">
        {
          FormSections.map((section, index) => (
            <li
              key={index}
              className={currentStep === index ? 'active' : ''}
            >
              <Link to={{ pathname: '/households/new', query: { step: index } }}>
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
  const section = FormSections[currentStep];
  const FormSection = section.component;
  return (
    <div>
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
        {JSON.stringify(props)}
      </form>
    </div>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
  currentStep: PropTypes.number,
  numberOfSteps: PropTypes.number,
};

export default Form;
