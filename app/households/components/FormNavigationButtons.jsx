import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const FormNavigationButtons = (props) => {
  const { currentStep, numberOfSteps } = props;

  return (
    <div className="form-group">
      {
        currentStep > 0 && <Link
          to={{ pathname: '/households/new', query: { step: currentStep - 1 } }}
          className="btn btn-default"
        >
          Back
        </Link>
      }
      &nbsp;
        {
          currentStep < numberOfSteps - 1 &&
            <Link
              to={{ pathname: '/households/new', query: { step: currentStep + 1 } }}
              className="btn btn-default"
            >
              Next
            </Link>
        }
    </div>
  );
};

FormNavigationButtons.propTypes = {
  currentStep: PropTypes.number.isRequired,
  numberOfSteps: PropTypes.number.isRequired,
};

export default FormNavigationButtons;
