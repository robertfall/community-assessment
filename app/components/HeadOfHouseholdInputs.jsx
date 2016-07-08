import React from 'react';
import TextField from './inputs/TextField';
import RadioButtons from './inputs/RadioButtons';
import BooleanCheckbox from './inputs/BooleanCheckbox';

export default () => (
  <div className="col-md-12" id="headOfHouseholdSection">
    <div className="form-group">
      <h3 className="col-md-6 col-md-offset-4">Identification of Head of Household</h3>
    </div>

    <div className="form-group">
      <TextField name="headOfHousehold.name" />
    </div>

    <div className="form-group">
      <TextField name="headOfHousehold.surname" />
    </div>

    <div className="form-group">
      <RadioButtons name="headOfHousehold.gender" options={['male', 'female']} />
    </div>

    <div className="form-group">
      <TextField name="headOfHousehold.maritalStatus" />
    </div>

    <div className="form-group">
      <TextField name="headOfHousehold.dateOfBirth" />
    </div>

    <div className="form-group">
      <TextField name="headOfHousehold.age" />
    </div>

    <div className="form-group">
      <BooleanCheckbox name="headOfHousehold.foreignNational" />
    </div>

    <div className="form-group">
      <TextField name="headOfHousehold.occupation" />
    </div>
  </div>
);
