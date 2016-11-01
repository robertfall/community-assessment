import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';  // ES6
import TableTextInput from './inputs/TableTextInput';
import TextField from './inputs/TextField';
import TableBooleanCheckbox from './inputs/TableBooleanCheckbox';
import RadioButtons from './inputs/RadioButtons';
import BooleanCheckbox from './inputs/BooleanCheckbox';
import CheckBoxes from './inputs/CheckBoxes';

const OccupantRow = ({ occupant, index, remove, fullName }) => (
  <div>
    <div className="row">
      <h3 className="col-md-6">
        Member { index + 1 }
        &nbsp;
        { fullName && `(${fullName})` }
      </h3>
      <div className="col-md-6 text-right">
        <a className="btn btn-danger" onClick={remove} >
          Remove
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <TextField name={`${occupant}.name`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.surname`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.relationHeadOfHoushold`} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <RadioButtons
            name={`${occupant}.gender`}
            options={['male', 'female']}
            label="Gender"
          />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.age`} label="Age" />
        </div>
        <div className="form-group">
          <BooleanCheckbox name={`${occupant}.atHomeDuringDay`} label="At Home During Day" />
        </div>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <TextField name={`${occupant}.bloodPressure.systolic`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.bloodPressure.diastolic`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.pulse`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.bloodGlucose`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.cholesterol`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.weight`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.length`} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <TextField name={`${occupant}.mobility`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.selfCare`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.usualActivity`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.painOrDiscomfort`} />
        </div>
        <div className="form-group">
          <TextField name={`${occupant}.anxietyOrDepression`} />
        </div>
      </div>
    </div>
    <div className="form-group">
      <CheckBoxes
        name={`${occupant}.conditions`}
        label="Current Health Conditions"
        includeOther
        options={[
          'Chronic Respiratory Problems',
          'Hypertension',
          'Epilepsy',
          'Diabetes',
          'Chronic Medication',
          'TB Medication',
          'Current Coughing',
          'Current Night Sweats',
          'Recent Weight Loss',
          'Diarrhoea',
          'Chronic Wound',
          'Disability',
          'Problems With Vision',
        ]}
      />
    </div>
    <div className="form-group">
      <TextField name={`${occupant}.date`} />
    </div>
    <div className="form-group">
      <TextField name={`${occupant}.comments`} />
    </div>
    <div className="form-group">
      <TextField name={`${occupant}.followUpReminder`} />
    </div>
  </div>
);

OccupantRow.propTypes = {
  occupant: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  fullName: PropTypes.string,
};

const select = formValueSelector('communityAssessment');
const mapStateToProps = (state, ownProps) => {
  const value = select(state, `${ownProps.occupant}.name`, `${ownProps.occupant}.surname`);
  if (!value.occupants) return {};
  const { name, surname } = value.occupants.occupants[ownProps.index];
  return {
    fullName: [name, surname].join(' '),
  };
};
export default connect(mapStateToProps)(OccupantRow);
