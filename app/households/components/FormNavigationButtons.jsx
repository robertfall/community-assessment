import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const FormNavigationButtons = (props) => {
  const { currentStep, numberOfSteps } = props;

  return (
    <div className="col-md-12">
      <div className="form-group">
        {
          currentStep > 1 && <Link
            to={{ pathname: '/households/new', query: { step: currentStep - 1 } }}
            className="btn btn-default"
          >
            Back
          </Link>
        }
        &nbsp;
        {
          currentStep < numberOfSteps &&
            <Link
              to={{ pathname: '/households/new', query: { step: currentStep + 1 } }}
              className="btn btn-default"
            >
              Next
            </Link>
        }
        &nbsp;
        <input type="submit" value="Save Household" className="btn btn-primary" />
      </div>
    </div>
  );
};

FormNavigationButtons.propTypes = {
  currentStep: PropTypes.number.isRequired,
  numberOfSteps: PropTypes.number.isRequired,
};

export default FormNavigationButtons;
